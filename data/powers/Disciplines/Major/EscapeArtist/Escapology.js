exports.power = {
  name: 'Escapology',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'escape-artist' }
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
  tooltip: 'Formulate your escape plan increasing your Resolve by 33% reducting Crowd Control durations and making it more likely that Crowd Control immunity triggers after being the victim of multiple Control effects.',
  icon: 'IMAGE_ENDPOINT/powers/escapology.png'
};
