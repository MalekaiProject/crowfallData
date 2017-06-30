exports.power = {
  name: 'Blood Strike 2',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'blade-master' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 5,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: ['blood-strike-3'],
  previous_chain: ['blood-strike'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Slash enemies for 51 - 69 + 60% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/blood-strike-2.png'
};
