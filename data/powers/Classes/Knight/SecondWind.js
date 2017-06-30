exports.power = {
  name: 'Second Wind (Knight)',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
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
  tooltip: 'Heals you for 4% of your maximum Health every second and recovers Stamina. This effect is automatically triggered when dropping below 20% health.',
  icon: 'IMAGE_ENDPOINT/powers/second-wind-knight.png'
};
