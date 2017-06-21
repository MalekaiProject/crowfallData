exports.power = {
  name: 'Shield Breaker',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'shield-breaker' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Reticle',
  max_targets: 5,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Crush an enemy who is actively using Block or Parry causing a Knockdown and dealing 91 - 123 + 107% Weapon Damage.',
  icon: ''
};
