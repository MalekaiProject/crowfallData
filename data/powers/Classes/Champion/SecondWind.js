exports.power = {
  name: 'Second Wind (Champion)',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 4,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'After not taking damage for 4 seconds and falling below 50% Health, Health Regeneration is greatly increased until reaching 50% Health.',
  icon: 'IMAGE_ENDPOINT/powers/second-wind-champion.png'
};
