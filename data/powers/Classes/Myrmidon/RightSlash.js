exports.power = {
  name: 'Right Slash',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5.5,
  next_chain: ['left-slash'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: 'Attack with your right weapon for 3 - 4 + 4% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/right-slash.png'
};
