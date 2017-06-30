exports.power = {
  name: 'Charge',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Reticle',
  max_targets: 1,
  range: 30,
  next_chain: [],
  previous_chain: ['cast-net'],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Charge toward your target inflicting 72 - 88 + 80% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/charge.png'
};
