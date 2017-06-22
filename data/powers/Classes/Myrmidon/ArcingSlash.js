exports.power = {
  name: 'Arcing Slash',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 5,
  range: 5.5,
  next_chain: ['whirlwind'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Slash upward violently inflicting 41 - 50 + 46% Weapon Damage.',
  icon: ''
};
