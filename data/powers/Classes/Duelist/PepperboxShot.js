exports.power = {
  name: 'Pepperbox Shot',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Crowd Control',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 1,
    resource: 0
  },
  tooltip: 'Indiscriminately blast up to three targets causing 57 - 86 + 72% Weapon Damage. Effects scale with Pips spent. 1 Pip: 57 - 86. 2 Pips: 114 - 172. 3 Pips: 171 - 258. 4 Pips: 228 - 344. 5 Pips: 285 - 430 and targets are stunned.',
  icon: 'IMAGE_ENDPOINT/powers/pepperbox-shot.png'
};
