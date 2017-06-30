exports.power = {
  name: 'Runecarve Flesh',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'runescarred-gladiator' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 6,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Carve Runes into your flesh absorbing 50% of damage taken for 6 seconds and then exploding to inflict 35% of total damage taken (max 1050) to nearby enemies as Fire damage.',
  icon: 'IMAGE_ENDPOINT/powers/runecarve-flesh.png'
};
