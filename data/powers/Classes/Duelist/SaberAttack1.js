exports.power = {
  name: 'Saber Attack 1',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['saber-attack-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 41 - 61 + 51% Weapon Damage.',
  icon: ''
};
