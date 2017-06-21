exports.power = {
  name: 'Rune Shield',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'rune-caster' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 30,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Protect yourself increasing Elemental Armor by 20.',
  icon: ''
};
