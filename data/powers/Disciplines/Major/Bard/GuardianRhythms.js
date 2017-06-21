exports.power = {
  name: 'Guardian Rhythms',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'bard' }
  ],
  type: 'Buff',
  cast_type: 'Toggle',
  duration: 12,
  cooldown: 1,
  targeting: 'Group',
  max_targets: 5,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Reduces the groups Damage Taken by 15% for 12 seconds. Type 2 Song.',
  icon: ''
};
