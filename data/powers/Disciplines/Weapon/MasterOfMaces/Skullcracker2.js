exports.power = {
  name: 'Skullcracker 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-maces' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['skullcracker'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Smash an enemy, stunning them and causing 94 - 127 + 111% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/skullcracker-2.png'
};
