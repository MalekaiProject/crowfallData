exports.power = {
  name: 'Fire Wave',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Rectange',
  max_targets: 5,
  range: 18,
  next_chain: ['hellfire-blast'],
  previous_chain: ['hellfire-shield'],
  cost: {
    pips: 0,
    resource: 60
  },
  tooltip: 'Consumes your Hellfire Shield and transforms it into a fiery wave, which move forward and damages all who are struck by it for 87 - 130 + 109% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/fire-wave.png'
};
