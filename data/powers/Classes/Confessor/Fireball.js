exports.power = {
  name: 'Fireball',
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
  next_chain: ['fireball-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Shoots a fireball towards your reticle that explodes for 37 - 55 + 46% Weapon Damage as Fire Damage. Applies Sin to anyone damaged.',
  icon: 'IMAGE_ENDPOINT/powers/fireball.png'
};
