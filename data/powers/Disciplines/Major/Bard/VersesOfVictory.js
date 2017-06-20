exports.power = {
  name: 'Verses of Victory',
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
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Increases your groups Attack Power by 150 as well as Support Power by 150 for 12 seconds. Type 4 Song.',
  icon: ''
};
