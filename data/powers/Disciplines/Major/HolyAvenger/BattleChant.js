exports.power = {
  name: 'Battle Chant',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'holy-avenger' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 12,
  cooldown: 24,
  targeting: 'Self',
  max_targets: 0,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Summon spinning hammers lasting 12 seconds to damage nearby enemies for 85 - 115 + 100% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/battle-chant.png'
};
