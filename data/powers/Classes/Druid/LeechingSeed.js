exports.power = {
  name: 'Leeching Seed',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 8,
  cooldown: 30,
  targeting: 'Area',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 35
  },
  tooltip: 'Cause an enemy to become lethargic increasing all Power colldowns and reducing their movement speed for 8 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/leeching-seed.png'
};
