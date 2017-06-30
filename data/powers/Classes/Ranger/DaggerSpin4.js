exports.power = {
  name: 'Dagger Spin 4',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 5,
  targeting: 'Sphere',
  max_targets: 5,
  range: 6,
  next_chain: [],
  previous_chain: ['dagger-spin-3'],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: 'Spin in place and deal 57 - 77 + 67% Weapon Damage around you. Also increases your Lifesteal Bonus by 60% while executing this power.',
  icon: 'IMAGE_ENDPOINT/powers/dagger-spin-4.png'
};
