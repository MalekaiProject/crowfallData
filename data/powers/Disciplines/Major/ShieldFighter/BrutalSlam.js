exports.power = {
  name: 'Brutal Slam',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'shield-fighter' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 45,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Strike with your shield for 113 - 153 + 133% Weapon Damage and lower their Physical Armor by 20.',
  icon: 'https://cdn.malekai.network/images/powers/brutal-slam.png'
};
