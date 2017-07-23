require 'roo'
require 'json'

categories = ["Blacksmith Weapon", "Blacksmith Armor", "Fuel", "Basic Harvesting Tool", "Basic Weapon", "Survivalist", "Leatherworking Armor", "Leatherworking Component", "Woodworking Weapon", "Woodworking Armor", "Component", "Siege Warfare", "Geomancy", "Geomancy Architecutre", "Stonemasonry Component", "Harvesting Tool", "Runemaking Component", "Discipline", "Vessel", "Body Parts", "Accessory", "Jewelcrafting component", "Alchemy Component", "Alchemy Potions", "Meat"]

c = Roo::Spreadsheet.open('./crafting.xlsx')

@blob = Hash.new

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
  subattribute = resource.partition(/\d/).first.partition(/\[/).last.partition(/\]/).first.chomp.strip
  if subattribute == ""
    nil
  else
    subattribute
  end
end

def get_name(resource)
  if resource.include?("\n")
    resource.partition("\n").first
  else
    resource
  end
end


c.sheets.each_with_index do |t,i| 
  type = String.new
  wild_card = false
  empty_row_count = 0
  parent_recipe = nil
  abort_write = false
  (c.sheet(i).first_row .. c.sheet(i).last_row).each do |r| 
    row = c.sheet(i).row(r)
    
    if row[0] && categories.include?(row[0])
      type = row[0]
    elsif r > 70
      type = "subrecipe"
    end



    if row[0] && row[5] && !row[0].include?("Name") && (row[5] || row[6] || row[7] || row[8] || row[9] || row[10] || row[11] || row[12] || row[13] || row[14])
      if !@blob[t]
	@blob[t] = Hash.new
      end
      if !@blob[t][type]
	@blob[t][type] = Hash.new
      end
      new_name = String
      new_name = get_name(row[0])
      if r > 70
        attribute = get_sub_attribute(row[0])
	attribute_impact = get_float(row[0])
	sub_recipe = true
      end

      @blob[t].each do |type_name,type_full|
	type_full.each do |recipe_name,recipe_full|
	  if recipe_name == new_name
	    parent_recipe = new_name
	  end
	end
      end

      (0..12).each do |i|
        if row[i] && row[i] == "[Wild Card]"
          wild_card = true
        end
      end

      if !abort_write
	@blob[t][type].merge!(
	      new_name => {
		"Chance" => row[2],
		"Difficulty" => row[4],
		"Profession" => t,
		"Category" => type,
		"subRecipe" => sub_recipe || nil,
		"subAttribute" => attribute || nil,
		"subImpact" => attribute_impact || nil,
		"parentRecipe" => parent_recipe, 
		"wildCard" => wild_card || nil
	      })
	@blob[t][type][new_name]["Resources"] = Array.new
	@blob[t][type][new_name]["optionalResources"] = Array.new
	(5..11).each do |res_col|
	  if row[res_col]
	    @blob[t][type][new_name]["Resources"] << { name: strip_counts(row[res_col]), count: get_counts(row[res_col])} 
	  end
	end
	(12..16).each do |res_col|
	  if row[res_col]
	    @blob[t][type][new_name]["optionalResources"] << { name: strip_counts(row[res_col]), count: get_counts(row[res_col])} 
	  end
	end
      end
    end
    if !row[0] && !row[5] && !row[6] && !row[7] && !row[8] && !row[9] && !row[13] && !row[14]
      empty_row_count += 1
    end
  end
  parent_recipe = nil
end

puts JSON.pretty_generate(JSON[@blob.to_json])

