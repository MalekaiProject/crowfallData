const fs = require('fs');
const path = require('path');

const powerTypeMappings = [
  'buff',
  'crowd control',
  'crowd control self',
  'debuff',
  'melee attack',
  'passive',
  'ranged attack',
  'non-aggressive',
  'retaliate',
  'transformation',
  'ultimate'
];

const powerCastTypeMappings = [
  'instant',
  'channeled',
  'charged',
  'ground aimed',
  'hold charged',
  'hold channeled',
  'passive',
  'toggle'
];

const targetingMappings = [
  'area',
  'cone',
  'group',
  'point blank area',
  'ray',
  'rectangle',
  'reticle',
  'self',
  'sphere'
];

const walk = function(dir) {
  let results = [];
  let list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else results.push(file);
  });
  return results;
};

let data = walk('data').reduce((obj, file) => {
  let type = /^data\/(.+?)\//.exec(file)[1];
  let json = require(`../${file}`);
  let parsed = path.parse(file);

  obj[type] = obj[type] || {};
  obj[type][parsed.name] = json;
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
Object.keys(data.power)
  .map(d => Object.assign({ id: d }, data.power[d]))
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
Object.keys(data.power)
  .map(d => Object.assign({ id: d }, data.power[d]))
  .forEach(power => {
    power.sources
      .forEach(source => {
        let type = source.type;
        let { powers } = data[type][source.id];

        if (!powers || powers.indexOf(power.id) === -1) {
          console.log(`${power.id} is missing from its source ${source.id}`);
          return true;
        }
      });
  });

// validate powers lists have valid powers
['class', 'discipline']
  .map(type => data[type])
  .forEach(type => {
    Object.keys(type)
      .map(d => Object.assign({ id: d }, type[d]))
      .forEach(d => {
        let { powers = [] } = d;

        powers.forEach(power => {
          if (!data.power[power]) {
            console.log(`${power} from ${d.name} is not a valid power`);
          }
        });
      });
  });

