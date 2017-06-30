exports.power = {
  name: 'Poisoned Blade',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'poisoner' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['poisoned-blade-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Attack for 113 - 153 + 133% Weapon Damage and cause the enemy to become Poisoned taking 8 - 9 + 1% Weapon Damage per tick.',
  icon: 'https://cdn.malekai.network/images/powers/poisoned-blade.png'
};
