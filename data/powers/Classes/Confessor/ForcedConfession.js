exports.power = {
  name: 'Forced Confession',
  sources: [
    { type: 'class', id: 'confessor' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: '',
  cooldown: 30,
  targeting: 'Sphere',
  max_targets: 1,
  range: 30,
  next_chain: [],
  previous_chain: ['flames-of-truth'],
  cost: {
    pips: 0,
    resource: 55
  },
  tooltip: 'Consumes Flame of the Truth on your reticle target, which instantly exploded for 47 - 71 + 59% Weapon Damage, and stuns the target. Does nothing againts target without Flames of Truth.',
  icon: 'IMAGE_ENDPOINT/powers/forced-confession.png'
};
