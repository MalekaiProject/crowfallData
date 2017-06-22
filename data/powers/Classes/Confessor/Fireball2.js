exports.power = {
  name: 'Fireball 2',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: '',
  cooldown: '',
  targeting: 'Reticle',
  max_targets: 1,
  range: 25,
  next_chain: ['multi-fireball'],
  previous_chain: ['fireball'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Shoots a fireball towards your reticle that explodes for 48 - 72 + 60% Weapon Damage as Fire Damage. Applies Sin to anyone damaged.',
  icon: ''
};
