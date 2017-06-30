exports.power = {
  name: 'Uppercut',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 6,
  next_chain: ['sunder-armor', 'drive'],
  previous_chain: ['no-quarter'],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: 'Swipe in front of you for 121 - 148 + 134% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/uppercut.png'
};
