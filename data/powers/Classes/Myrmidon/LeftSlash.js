exports.power = {
  name: 'Left Slash',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5.5,
  next_chain: ['double-slash'],
  previous_chain: ['right-slash'],
  cost: {
    pips: 0,
    resource: 19
  },
  tooltip: 'Attack with your left weapon for 8 - 9 + 9% Weapon Damage.',
  icon: ''
};
