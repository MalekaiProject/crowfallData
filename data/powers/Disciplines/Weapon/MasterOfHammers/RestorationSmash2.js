exports.power = {
  name: 'Restoration Smash 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-hammers' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['restoration-smash'],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Crush an enemy for 116 - 156 + 136% Weapon Damage while restoring your Resource.',
  icon: ''
};
