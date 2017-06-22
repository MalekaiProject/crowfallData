exports.power = {
  name: 'Radiant Sweep',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: ['castigate'],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: 'Knock down multiple enemies dealing 72 - 108 + 90% Weapon Damage.',
  icon: ''
};
