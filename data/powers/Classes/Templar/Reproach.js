exports.power = {
  name: 'Reproach',
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
  next_chain: ['castigate'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Slash multiple enemies for 54 - 81 + 67% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/reproach.png'
};
