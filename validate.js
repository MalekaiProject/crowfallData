const fs = require('fs');

let folders = fs.readdirSync('data');

// load data
let data = folders.reduce((obj, folder) => {
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

