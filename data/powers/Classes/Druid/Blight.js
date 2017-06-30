exports.power = {
  name: 'Blight',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: '',
  cooldown: 23,
  targeting: 'Area',
  max_targets: 5,
  range: 10,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 57
  },
  tooltip: 'Deploy a field causing each COALESCE LIFE orb to explode catasrophically for 86 - 120 + 108% Weapon Damage while COALESCE NATURE orbs explode for 90 to 136 + 113% Weapon Damage. Reduces Earth and Electric defenses by 20%.',
  icon: 'https://cdn.malekai.network/images/powers/blight.png'
};
