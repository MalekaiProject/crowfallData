exports.power = {
  name: 'Smash',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['giant-smash'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Strike in front of you for 68 - 92 + 80% Weapon Damage, generating 4 Rage if you hit.',
  icon: 'https://cdn.malekai.network/images/powers/smash.png'
};
