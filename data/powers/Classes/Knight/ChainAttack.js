exports.power = {
  name: 'Chain Attack',
  sources: [
    { type: 'class', id: 'knight' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 24,
  targeting: 'Reticle',
  max_targets: 1,
  range: 30,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 25
  },
  tooltip: 'Throw a chain forward, applying a large pulling force to any enemy causing 130 - 176 + 153% and dazing the target for 4 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/chain-attack.png'
};
