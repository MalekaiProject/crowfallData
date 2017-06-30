exports.power = {
  name: 'Warp Metal',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'militant-mage' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 8,
  cooldown: 30,
  targeting: 'Ray',
  max_targets: 1,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Curse an enemy with a destructive aura increasing Resource Cost for each Slashing damage attack they commit.',
  icon: 'IMAGE_ENDPOINT/powers/warp-metal.png'
};
