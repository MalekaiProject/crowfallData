exports.power = {
  name: 'Contain Essence',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 45,
  cooldown: 5,
  targeting: 'Self',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: ['natural-bond'],
  cost: {
    pips: 0,
    resource: 26
  },
  tooltip: 'Raise your Life affinity reducing your Essence Gain by 35% for 45 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/contain-essence.png'
};
