exports.power = {
  name: 'Sunder Armor',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 45,
  targeting: 'Cone',
  max_targets: 5,
  range: 7,
  next_chain: [],
  previous_chain: ['uppercut'],
  cost: {
    pips: 0,
    resource: 8
  },
  tooltip: 'Swipe in front of you twice for 49 - 59 + 54% Weapon Damage. Applies an Armor Break to all hit,, which reduces all Physical Mitigations by 20% for 15 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/sunder-armor.png'
};
