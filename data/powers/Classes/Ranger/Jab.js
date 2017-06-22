exports.power = {
  name: 'Jab',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['sweep'],
  cost: {
    pips: 0,
    resource: 47
  },
  tooltip: 'Slash in front of you, critically striking for 118 - 160 + 139% Weapon Damage.',
  icon: ''
};
