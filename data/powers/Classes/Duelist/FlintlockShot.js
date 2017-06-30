exports.power = {
  name: 'Flintlock Shot',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Shoot for 107 - 160 + 134% Weapon Damage and generating two Pips. If FLINTLOCK SHOT hits and Exposed enemy while they attack or use an ability they are knocked down, and take additional damage and you generate an additional Pip.',
  icon: 'https://cdn.malekai.network/images/powers/flintlock-shot.png'
};
