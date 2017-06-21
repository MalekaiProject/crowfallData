
exports.power = {
  name: 'Cancel Combo (Champion)',
  sources: [
    { type: 'class', id: 'champion' }
  ],
  type: 'Non-Aggressive',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: ['whirling-pain'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Cancels the current combo power being executed.',
  icon: ''
};
