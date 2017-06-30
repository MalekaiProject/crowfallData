exports.power = {
  name: 'Vicious Stomp',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Cone',
  max_targets: 1,
  range: 6,
  next_chain: ['disarming-shout', 'rend'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 7
  },
  tooltip: 'Stomp the ground in front of you, dealing 63 - 85 + 74% Weapon Damage. Applies a 50% movement speed reduction to all hit.',
  icon: 'IMAGE_ENDPOINT/powers/vicious-stomp.png'
};
