exports.power = {
  name: 'Critical Slice',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-rapiers' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['critical-slice-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: 'Slice an enemy for 77 - 105 + 91% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/critical-slice.png'
};
