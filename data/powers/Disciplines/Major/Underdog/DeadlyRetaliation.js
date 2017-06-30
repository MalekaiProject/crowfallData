exports.power = {
  name: 'Deadly Retaliation',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'underdog' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Jump to your feet dealing 113-153 + 133% Weapon Damage to nearby enemies. This attack is a guaranteed Critical Hit.',
  icon: 'IMAGE_ENDPOINT/powers/deadly-retaliation.png'
};
