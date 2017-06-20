exports.power = {
  name: 'Whirling Pain',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Sphere',
  max_targets: 5,
  range: 4.3,
  next_chain: ['cancel-combo-champion'],
  previous_chain: ['massive-cleave'],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: 'Sweep 7 times around you dealing 59 - 79 + 69% Weapon Damage per swing. You may move while spinning.',
  icon: ''
};
