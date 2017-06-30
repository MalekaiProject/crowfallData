exports.power = {
  name: 'Side Strike',
  sources: [
    { type: 'class', id: 'cleric' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: ['discipling-strike'],
  previous_chain: ['strike'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Strike in front of you for 108 - 132 + 120% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/side-strike.png'
};
