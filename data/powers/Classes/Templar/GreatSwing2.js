exports.power = {
  name: 'Great Swing 2',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['great-swing-3'],
  previous_chain: ['great-swing-1'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 58 - 87 + 73% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/great-swing-2.png'
};
