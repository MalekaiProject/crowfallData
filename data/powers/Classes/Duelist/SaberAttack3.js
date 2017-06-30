exports.power = {
  name: 'Saber Attack 3',
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
  next_chain: [],
  previous_chain: ['saber-attack-2'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 69 - 104 + 86% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/saber-attack-3.png'
};
