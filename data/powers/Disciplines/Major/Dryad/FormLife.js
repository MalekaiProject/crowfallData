exports.power = {
  name: 'Form Life',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'dryad' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Area',
  max_targets: 1,
  range: 35,
  next_chain: ['form-life-2'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Manifest an Orb at your targeted location that allies or you may use to heal 97 to 119 + 108% Weapon Damage.',
  icon: ''
};
