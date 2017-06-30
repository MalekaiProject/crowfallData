exports.power = {
  name: 'Blood Strike 3',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'blade-master' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: ['blood-strike-2'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Attack multiple enemies for 58 - 78 + 68% Weapon Damage and causing them to Bleed for 50 - 75 + 6% Weapon Damage per tick.',
  icon: 'IMAGE_ENDPOINT/powers/blood-strike-3.png'
};
