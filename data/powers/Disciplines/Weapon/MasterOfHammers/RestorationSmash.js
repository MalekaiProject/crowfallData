exports.power = {
  name: 'Restoration Smash',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-hammers' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['restoration-smash-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: 'Smash an enemy for 117 - 159 + 138% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/restoration-smash.png'
};
