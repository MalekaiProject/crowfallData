const fs = require('fs');

// load data
const powerDirectory = './data/powers';

/**
 * tags needing more exploration
 *
 * reveal: /reveal/  - currently matches powers that do not deal with stealth reveal
 * chain: /chain/ - most that match are not relevant
 */

let test = 'retaliate';
const tagRegex = {
  // armor break
  'armor break': /armor\sbreak/,

  // attack power
  'attack power': /attack\spower/,

  // barrier
  barrier: /barrier/,

  // black mantle
  'black mantle': /black\smantle/,

  // bleed, bleeding
  bleed: /bleed/,

  // blinds, blinding, blind, blinded
  blind: /\bblind(ed|s|ing)?\b/,

  // block
  block: /block/,

  // burn, burning
  burning: /\bburn(ing)?\b/,

  // burrow
  burrow: /burrow/,

  // corruption
  corruption: /\bcorruption\b/,

  // crush crushing crushed
  crushing: /\bcrush(ed|ing)?\b/,

  // electric, electricity
  electric: /electric(ity)?/,

  // expose exposed exposing
  exposed: /\bexpos(e|ed|ing)\b/,

  // fire
  fire: /\bfire\b/,

  // heal, heals healing - does not match health or healed (impale power)
  heal: /\b(heal(s|ing)?)\b/,

  // regen, health regen
  'health regeneration': /(health\s)?regen/,

  invulnerable: /invulnerable/,

  // knock knockdown, knock down, knocked down
  'knock down': /\b(knock(ed)?(\s)?(down)?)/,

  // lifesteal
  lifesteal: 'life(\s)?steal',

  // mortal strike
  'mortal strike': /mortal\sstrike/,

  // movement speed, movement speed reduction
  'movement speed': /movement\sspeed/,

  // parry
  parry: /parry/,

  // perception
  perception: /perception/,

  // pierce, piercing, pierces
  piercing: /pierc(e|es|ing)/,

  // poison poisoned
  poison: /\b(poison(ed)?)\b/,

  // slashing
  slashing: /slashing/,

  // slow, slowing, slowed, movement speed reduction
  slow: /\b\bslow(ing|ed)?\b/,

  // sin
  sin: /\bsin\b/,

  // snare, snaring
  snare: /\bsnar(e|ing)\b/,

  // support power
  'support power': /support\spower/,

  // suppress, suppressed
  suppress: /\b(suppress(ed)?)\b/,

  // stealth
  stealth: /stealth/,

  // stun, stunning
  stun: /\b(stun(ning)?)\b/,

  // retaliate
  retaliate: /retaliate/,

  // retribution
  retribution: /retribution/,

  // righteousness
  righteousness: /righteousness/,

  // root, rooting, roots, rooted
  root: /\broot(ing|s|ed)?\b/,

  // weapon break
  'weapon break': /weapon\sbreak/
};

let powers = fs.readdirSync(powerDirectory)
  .reduce((obj, file) => {
    let name = file.replace('.json', '');
    obj[name] = require(`./${powerDirectory}/${file}`);
    obj[name].id = name;
    obj[name].file = `./${powerDirectory}/${file}`;
    return obj;
  }, {});

let taggedPowers = Object.keys(powers)
  .map(key => powers[key])
  .map(p => {
    console.log(p);
    let matches = Object.keys(tagRegex)
      .map(key => ({
        id: key,
        value: tagRegex[key]
      }))
      .filter(regex => {
        let match = p.tooltip.toLowerCase().match(regex.value);

        if (regex.id === test && match) {
          console.log(p.id, '\n', match, '\n');
        }

        return match;
      })
      .map(regex => regex.id);

    p.tags = matches;
    return p;
  });

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

taggedPowers
  .forEach(p => {
    p.tags = p.tags.map(t => {
      return toTitleCase(t);
    }).sort();
  });

taggedPowers.forEach(p => {
  let { file } = p;

  delete p.file;
  delete p.id;
  let json = `${JSON.stringify(p, null, 2)}\n`;

  fs.writeFileSync(file, json);
});
