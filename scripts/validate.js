const fs = require('fs');

const powerTypeMappings = [
  'Buff',
  'Crowd Control',
  'Crowd Control Self',
  'Debuff',
  'Melee Attack',
  'Passive',
  'Ranged Attack',
  'Non-Aggressive',
  'Retaliate',
  'Transformation',
  'Ultimate'
];

const powerCastTypeMappings = [
  'Instant',
  'Channeled',
  'Charged',
  'Ground Aimed',
  'Hold Charged',
  'Hold Channeled',
  'Passive',
  'Toggle'
];

const targetingMappings = [
  'Area',
  'Cone',
  'Group',
  'Point Blank Area',
  'Ray',
  'Rectangle',
  'Reticle',
  'Self',
  'Sphere'
];

// load data
let data = fs.readdirSync('data')
  .reduce((obj, folder) => {
    let directory = `data/${folder}`;

    if (fs.lstatSync(directory).isDirectory()) {
      obj[folder] = fs.readdirSync(directory)
        .reduce((obj, file) => {
          let name = file.replace('.json', '');
          obj[name] = require(`./${directory}/${file}`);
          return obj;
        }, {});
    }
    return obj;
  }, {});

// type checking
Object.keys(data)
  .map(type => data[type])
  .forEach(type => {
    Object.keys(type)
      .map(d => Object.assign({ id: d }, type[d]))
      .forEach(d => {
        // strings
        ['description', 'name']
          .forEach(t => {
            if (d.hasOwnProperty(t) && typeof d[t] !== 'string') {
              console.log(`${d.id}: description is not a valid string`);
            }
          });

        // array
        ['classes', 'cost', 'races', 'powers', 'sources', 'previous_chain', 'next_chain']
          .forEach(t => {
            if (d.hasOwnProperty(t) && !Array.isArray(d[t])) {
              console.log(`${d.id}: ${t} is not a valid array`);
            }
          });

        ['cooldown', 'duration', 'max_targets', 'range']
          .forEach(t => {
            // duration
            if (d.hasOwnProperty(t) && typeof d[t] !== 'number') {
              console.log(`${d.id}: ${t} is not a valid number`);
            }
          });
      });
  });

// power validations
Object.keys(data.powers)
  .map(d => Object.assign({ id: d }, data.powers[d]))
  .forEach(p => {
    let { cast_type: castType, targeting, type } = p;

    // cast type
    if (powerCastTypeMappings.indexOf(castType) === -1) {
      console.log(`${p.id}: ${castType} is not a valid power cast type`);
    }

    // power type
    if (powerTypeMappings.indexOf(type) === -1) {
      console.log(`${p.id}: ${type} is not a valid power type`);
    }

    // targeting
    if (targetingMappings.indexOf(targeting) === -1) {
      console.log(`${p.id}: ${targeting} is not a valid targeting value`);
    }
  });

// validate powers exist in their sources
Object.keys(data.powers)
  .map(d => Object.assign({ id: d }, data.powers[d]))
  .forEach(power => {
    power.sources
      .forEach(source => {
        let type = source.sub_type || source.type;
        let { powers } = data[type][source.id];

        if (!powers || powers.indexOf(power.id) === -1) {
          console.log(`${power.id} is missing from its source ${source.id}`);
          return true;
        }
      });
  });

// validate powers lists have valid powers
['class', 'major', 'minor', 'weapon']
  .map(type => data[type])
  .forEach(type => {
    Object.keys(type)
      .map(d => Object.assign({ id: d }, type[d]))
      .forEach(d => {
        let { powers = [] } = d;

        powers.forEach(power => {
          if (!data.powers[power]) {
            console.log(`${power} from ${d.name} is not a valid power`);
          }
        });
      });
  });

