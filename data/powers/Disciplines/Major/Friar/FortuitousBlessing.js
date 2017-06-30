exports.power = {
  name: 'Fortuitous Blessings',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'friar' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Have faith and recieve the blessing you need.  Your actions determine whether you receive the Seeker\'s Blessing for movement speed, Charitable Blessing for Support Power or Impoverished Blessing for restoring your resource over time.',
  icon: 'IMAGE_ENDPOINT/powers/fortuitous-blessings.png'
};
