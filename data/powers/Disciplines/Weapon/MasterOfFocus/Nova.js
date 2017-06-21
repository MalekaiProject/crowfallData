exports.power = {
  name: 'Nova',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-focus' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Area',
  max_targets: 5,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: 'Draw enemies toward you repeatedly inflicting 2 - 3 + 2% Weapon Damage.',
  icon: ''
};
