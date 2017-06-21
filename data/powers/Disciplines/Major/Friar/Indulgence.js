exports.power = {
  name: 'Indulgence',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'friar' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 30,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Indulgence Cleanse yourself and become immune to Sin for 30 seconds.',
  icon: ''
};
