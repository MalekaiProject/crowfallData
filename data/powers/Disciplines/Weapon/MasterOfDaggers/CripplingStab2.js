exports.power = {
  name: 'Crippling Stab 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-daggers' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['crippling-stab'],
  cost: {
    pips: 0,
    resource: 6
  },
  tooltip: 'Traumatize an enemy increasing their cooldown times and causing 49 - 67 + 58% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/crippling-stab-2.png'
};
