exports.power = {
  name: 'Go For Broke',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Channeled',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 3,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Leap from your Burrow with full commitment, unleashing a deadly hail of gunfire assaulting up to three targets in a cone multiple times for 39 - 58 + 48% Weapon Damage before returning to your burrow again if you can avoid damage. Striking Exposed targets causes a guaranteed critical hit.',
  icon: 'IMAGE_ENDPOINT/powers/go-for-broke.png'
};
