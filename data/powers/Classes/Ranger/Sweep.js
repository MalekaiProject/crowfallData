exports.power = {
  name: 'Sweep',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Crowd Control Self',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['jab', 'disengage'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 31
  },
  tooltip: 'Slash in front of you for 68 - 92 - 80% Weapon Damage. Applies Cunning Sweep to one nearby group member, which adds 15% Bonus Damage to their next attack.',
  icon: 'https://cdn.malekai.network/images/powers/sweep.png'
};
