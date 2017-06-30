exports.power = {
  name: 'Shield Stun',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['shield-swipe'],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: 'Attack and stune those in front of you for 105 - 142 + 124% Crushing Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/shield-stun.png'
};
