require 'roo'
require 'json'

c = Roo::Spreadsheet.open('../spreadsheets/crafting.xlsx')

categories = ["Blacksmith Weapon", "Blacksmith Armor", "Fuel", "Basic Harvesting Tool", "Basic Weapon", "Survivalist", "Leatherworking Armor", "Leatherworking Component", "Woodworking Weapon", "Woodworking Armor", "Component", "Siege Warfare", "Geomancy", "Geomancy Architecture", "Stonemasonry Component", "Harvesting Tool", "Runemaking Component", "Discipline", "Vessel", "Body Parts", "Accessory", "Jewelcrafting component", "Alchemy Component", "Alchemy Potions", "Meat"]

@blob = Hash.new
variants = Hash.new

def strip_counts(resource)
  if !resource.nil?
    return resource.gsub(/\s\(\d*\)/,'').chomp.strip
  else
    return nil
  end
end

def get_counts(resource)
  count = resource.partition(/\(/).last.partition(/\)/).first.to_i
  if count < 2
    count = 1
  else
    count
  end
end

def get_float(resource)
  float = resource.gsub(/[^\d.]/,'')
  if float == ""
    nil
  else 
    float.to_f
  end
end

def get_sub_attribute(resource)
  # learn to regexp please
  subattribute = resource.partition(/\d/).first.partition(/\[/).last.partition(/\]/).first.chomp.strip
  if subattribute == ""
    nil
  else
    subattribute
  end
end

def get_name(resource)
  if resource.include?("\n")
    resource.partition("\n").first.strip
  else
    resource
  end
end

def clean(str)
  str.gsub(/[():]/, "").gsub(/[^0-9A-Z]/i, '_').downcase
end

c.sheets.each_with_index do |t,i| 
  type = String.new
  empty_row_count = 0
  parent_type = nil
  parent_recipe = nil
  abort_write = false

  (c.sheet(i).first_row .. c.sheet(i).last_row).each do |r| 
    wild_card = false
    row = c.sheet(i).row(r)
    
    # set type if a header exists
    if row[0] && categories.include?(row[0])
      type = row[0]
    end

    if row[0] && row[5] && !row[0].include?("Name") && (row[5] || row[6] || row[7] || row[8] || row[9] || row[10] || row[11] || row[12] || row[13] || row[14])

      new_name = get_name(row[0])

      if r < 70
        if !@blob[t]
	  @blob[t] = Hash.new
	end
	if !@blob[t][type]
	  @blob[t][type] = Hash.new
	end

       (0..12).each do |i|
	  if row[i] && row[i] == "[Wild Card]"
	    wild_card = true
	  end
	end

	if !abort_write
	  @blob[t][type].merge!(
		new_name => {
		  "name" => new_name,
		  "profession" => t,
		  "category" => type,
		  "success_chance" => row[2],
		  "difficulty" => row[4],
                  "number_created" => row[1].to_i
		})
	  @blob[t][type][new_name]["components"] = Array.new
	  (5..11).each do |res_col|
	    if row[res_col]
	      @blob[t][type][new_name]["components"] << { name: strip_counts(row[res_col]), amount: get_counts(row[res_col]), required: true} 
	    end
	  end
	  (12..16).each do |res_col|
	    if row[res_col]
	      @blob[t][type][new_name]["components"] << { name: strip_counts(row[res_col]), amount: get_counts(row[res_col]), required: false} 
	    end
	  end
        end
      else

       if !@blob[t]
          @blob[t] = Hash.new
        end
        if !@blob[t][type]
          @blob[t][type] = Hash.new
        end

	## set subrecipe attributes
	if r > 70
	  attribute = get_sub_attribute(row[0])
	  attribute_impact = get_float(row[0])
	  sub_recipe = true
	end

	## set parent recipe if it exists
	@blob[t].each do |type_name,type_full|
	  type_full.each do |recipe_name,recipe_full|
	    if recipe_name == new_name
              parent_type = type_name
	      parent_recipe = new_name
	    end
	  end
	end

        if !variants[t]
          variants[t] = Hash.new
        end
        if !variants[t][parent_type]
          variants[t][parent_type] = Hash.new
        end

	components = Array.new
        (5..11).each do |res_col|
	  if row[res_col]
	    components << { name: strip_counts(row[res_col]), amount: get_counts(row[res_col], required: true)} 
	  end
	end
	(12..16).each do |res_col|
	  if row[res_col]
	    components << { name: strip_counts(row[res_col]), amount: get_counts(row[res_col], required: false)} 
	  end
	end
        if parent_recipe != new_name || (new_name.include?('Sigil') && components.first['name'] != "Ore")
          variants[t][parent_type].merge!(
                new_name => {
                  "name" => new_name,
                  "parent" => parent_recipe,
                  "attribute" => attribute || nil,
                  "impact" => attribute_impact || nil,
                  "success_chance" => row[2],
                  "difficulty" => row[4],
                  "components" => components
                })
        end
	components = nil
        # not 70?
      end
    end
    if !row[0] && !row[5] && !row[6] && !row[7] && !row[8] && !row[9] && !row[13] && !row[14]
      empty_row_count += 1
    end
  end
end

@blob.each do |profession,types|
  Dir.mkdir clean(profession) unless File.exists?(clean(profession))
  types.each do |type,recipes|
    recipes.each do |name, values|
      #if !values["components"].empty?
      Dir.mkdir "#{clean(profession)}/#{clean(name)}" unless File.exists?("#{clean(profession)}/#{clean(name)}")
        File.open("#{clean(profession)}/#{clean(name)}/#{clean(name)}.json", "w") do |f|
          f.puts JSON.pretty_generate(values)
        end
    end
  end
end

variants.each do |profession,types|
  Dir.mkdir clean(profession) unless File.exists?(clean(profession))
  types.each do |type,recipes|
    recipes.each do |name, values|
      #if !values["components"].empty?
      Dir.mkdir("#{clean(profession)}/#{clean(values['parent'])}") unless File.exists?("#{clean(profession)}/#{clean(values['parent'])}")
        File.open("#{clean(profession)}/#{clean(values['parent'])}/#{clean(name)}.json", "w") do |f|
          f.puts JSON.pretty_generate(values)
        end
    end
  end
end

# output JSON to stdout for debugging
puts JSON.pretty_generate(JSON[@blob.to_json])
