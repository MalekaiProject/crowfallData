exports.power = {
  name: 'Heads Up',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'mole-hunter' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 30,
  cooldown: 68,
  targeting: 'Group',
  max_targets: 5,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Increase the Perception of group members and yourself by 25 for 30 seconds and removes the Exposed state.',
  icon: 'https://cdn.malekai.network/images/powers/heads-up.png'
};
