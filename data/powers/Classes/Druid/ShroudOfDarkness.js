exports.power = {
  name: 'Shroud of Darkness',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: '',
  cooldown: 45,
  targeting: 'Self',
  max_targets: '',
  range: '',
  next_chain: ['wicked-winds'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 31
  },
  tooltip: 'Attacks made against you have a chance of Stunning the enemy who struck you.',
  icon: 'https://cdn.malekai.network/images/powers/shroud-of-darkness.png'
};
