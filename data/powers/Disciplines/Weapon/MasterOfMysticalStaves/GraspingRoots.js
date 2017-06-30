exports.power = {
  name: 'Grasping Roots',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-mystical-staves' }
  ],
  type: 'Debuff',
  cast_type: 'Ground Aimed',
  duration: 0,
  cooldown: 24,
  targeting: 'Area',
  max_targets: 5,
  range: 7,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Command nature to envelope enemies in the targeted area rooting them in place and inflicting 50 - 75 + 63% Nature Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/grasping-roots.png'
};
