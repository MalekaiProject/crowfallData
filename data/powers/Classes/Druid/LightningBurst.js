exports.power = {
  name: 'Lightning Burst',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Instant',
  duration: '',
  cooldown: 9,
  targeting: 'Ray',
  max_targets: 5,
  range: 35,
  next_chain: ['lightning-strike'],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 68
  },
  tooltip: 'Blast enemies with lightning for 110 - 165 + 138% Weapon Damage.',
  icon: ''
};
