exports.power = {
  name: 'Frighten',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'destroyer' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Shout at an enemy inflicting 91 - 123 + 107% Weapon Damage and reducing their damage bonus.',
  icon: 'IMAGE_ENDPOINT/powers/frighten.png'
};
