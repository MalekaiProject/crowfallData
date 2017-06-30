exports.power = {
  name: 'Dazzling Blades',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'blade-master' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 3,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Disorient multiple enemies with an attack reducing their Critical Hit Chance by 40 for 15 seconds and inflicting 113 - 153 + 133% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/dazzling-blades.png'
};
