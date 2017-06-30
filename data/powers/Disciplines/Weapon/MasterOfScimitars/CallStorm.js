exports.power = {
  name: 'Call Storm',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-scimitars' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Ray',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Call lightning to strike a target stunning them and causing 60 - 90 + 75% Electric Weapon Damage.  Afterward they suffer Severe Electrocution taking 17 - 25 + 2% Electric Weapon Damage per tick.',
  icon: 'IMAGE_ENDPOINT/powers/call-storm.png'
};
