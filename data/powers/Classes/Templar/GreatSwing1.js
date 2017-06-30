exports.power = {
  name: 'Great Swing 1',
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
  next_chain: ['great-swing-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Attack for 48 - 72 + 60% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/great-swing-1.png'
};
