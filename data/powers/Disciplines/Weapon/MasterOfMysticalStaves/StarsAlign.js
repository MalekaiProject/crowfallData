exports.power = {
  name: 'Stars Align',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-mystical-staves' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 5,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Invoke forces of death increasing your Damage Bonus by 30% and reducing Weapon Resource Cost for 20 seconds.',
  icon: ''
};
