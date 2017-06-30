exports.power = {
  name: 'Haunt',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'banshee' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 3,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: 'Haunt 3 enemies, reflecting 35% of their attack damage as Nature damage (max 1050) and healing you for 35% of damage taken.',
  icon: 'https://cdn.malekai.network/images/powers/haunt.png'
};
