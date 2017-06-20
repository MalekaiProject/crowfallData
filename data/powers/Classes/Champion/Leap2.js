exports.power = {
  name: 'Leap 2',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Sphere',
  max_targets: 5,
  range: 4,
  next_chain: [],
  previous_chain: ['leap'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Leap forward, dealing 80 - 108 + 94% Weapon Damage as Crushing Damage as you land.',
  icon: ''
};
