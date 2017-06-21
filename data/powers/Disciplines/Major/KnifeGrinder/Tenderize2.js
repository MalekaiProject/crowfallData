exports.power = {
  name: 'Tenderize 2',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'knife-grinder' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['tenderize'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Cut an enemy for 76 - 103 + 90% Weapon Damage and reducing their Bleed Armor for 15 seconds.',
  icon: ''
};
