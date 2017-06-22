exports.power = {
  name: 'Disarming Shout',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['vicious-stomp'],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: 'Suppress enemies, disabling their powers for 6 seconds. Deals 140 - 190 + 165% Weapon Damage.',
  icon: ''
};
