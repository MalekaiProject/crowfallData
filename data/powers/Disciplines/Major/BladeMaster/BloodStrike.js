exports.power = {
  name: 'Blood Strike',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'blade-master' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: ['blood-strike-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Slash enemies for 45 - 60 + 53% Weapon Damage.',
  icon: 'https://cdn.malekai.network/images/powers/blood-strike.png'
};
