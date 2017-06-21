exports.power = {
  name: 'Archers Stake',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 35,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 131
  },
  tooltip: 'Create an Archer\'s Stake at the feet of the caster. The Stake grants 100 Attack Power to you as long as you are within 5m.',
  icon: ''
};
