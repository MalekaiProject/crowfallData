exports.power = {
  name: 'Grabthars Hammer',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'holy-avenger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['grabthars-hammer-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: 'Smite an enemy for 91 - 124 + 108% Weapon Damage.',
  icon: ''
};
