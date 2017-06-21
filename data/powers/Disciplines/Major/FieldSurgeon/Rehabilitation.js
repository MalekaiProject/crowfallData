exports.power = {
  name: 'Rehabilitation',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'field-surgeon' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 6,
  cooldown: 9,
  targeting: 'Reticle',
  max_targets: 2,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Tend an ally\'s and your wounds relieving 53 + 53% Weapon Damage plus an additional 1.4 Health for every point of Stamina every two seconds for six seconds.',
  icon: ''
};
