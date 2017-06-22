exports.power = {
  name: 'Flames of Truth',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: '',
  cooldown: 9,
  targeting: 'Sphere',
  max_targets: 1,
  range: 40,
  next_chain: ['forced-confession'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 70
  },
  tooltip: 'Applies Flames of Truth to your reticle target, damaging them for 17 - 26. After 10 seconds Flames of Truth explodes dealing 93 - 140 + 117% Weapon Damage as Fire Damage in a 4m radius.',
  icon: ''
};
