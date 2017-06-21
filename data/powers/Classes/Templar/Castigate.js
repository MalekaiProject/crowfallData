exports.power = {
  name: 'Castigate',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: ['radiant-sweep', 'righteous-smash'],
  previous_chain: ['reproach'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Slash multiple enemies for 61 - 92 + 76% Weapon Damage.',
  icon: ''
};
