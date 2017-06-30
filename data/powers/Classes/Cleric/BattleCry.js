exports.power = {
  name: 'Battle Cry',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 45,
  targeting: 'Group',
  max_targets: 5,
  range: 2,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Removes all movement impairing effects. Increases group movement speed by 10%.',
  icon: 'https://cdn.malekai.network/images/powers/battle-cry.png'
};
