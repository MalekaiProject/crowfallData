exports.power = {
  name: 'Reflection',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'militant-mage' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 24,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Reflect 50% Slashing Weapon Damage back to the source of a Slashing damage attack.',
  icon: ''
};
