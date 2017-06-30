exports.power = {
  name: 'No Quarter',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 5,
  targeting: 'Cone',
  max_targets: 1,
  range: 6,
  next_chain: ['uppercut'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Swipe in front of you for 94 - 115 + 105 Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/no-quarter.png'
};
