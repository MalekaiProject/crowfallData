exports.power = {
  name: 'Spirit Whip',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'spirit-whip' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Melee Basic attacks now whip to additional targets with #range#.  Each time the Spirit whips is deals less damage.  50% for the first whip and 25% for the second.',
  icon: 'IMAGE_ENDPOINT/powers/spirit-whip.png'
};
