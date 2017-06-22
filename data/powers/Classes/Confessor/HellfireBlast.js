exports.power = {
  name: 'Hellfire Blast',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Rectange',
  max_targets: 5,
  range: 30,
  next_chain: [],
  previous_chain: ['fire-wave'],
  cost: {
    pips: 0,
    resource: 80
  },
  tooltip: 'Damages all players in front of you who were hit by the Hellfire Wave for 76 - 114 + 95% Weapon Damage, and knocks them briefly into the air.',
  icon: ''
};
