exports.power = {
  name: 'Strength of the Legion',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Group',
  max_targets: 5,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Applies Legion\'s Strength to the group which grants 100 Attack Power. Should the Legionaire die in combat, applies Last Words to all nearby group members, which Heals them and increases their critical hit change, critical hit ammount.',
  icon: 'IMAGE_ENDPOINT/powers/strength-of-the-legion.png'
};
