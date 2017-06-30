exports.power = {
  name: 'Whirlwind',
  sources: [
    { type: 'class', id: 'myrmidon' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Sphere',
  max_targets: 5,
  range: 5,
  next_chain: ['cancel-combo-myrmidon'],
  previous_chain: ['arcing-slash'],
  cost: {
    pips: 0,
    resource: 9
  },
  tooltip: 'Spin around rapidly hitting nearby enemies multiple times for 24 - 29 + 26% Weapon Damage and causing them to Bleed for 18 -24 damage.',
  icon: 'IMAGE_ENDPOINT/powers/whirlwind.png'
};
