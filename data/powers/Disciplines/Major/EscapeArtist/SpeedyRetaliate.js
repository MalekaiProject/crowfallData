exports.power = {
  name: 'Speedy Retaliate',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'escape-artist' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 8,
  cooldown: 30,
  targeting: 'Area',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Regain your senses recovering immediately from Knockdown or Stun effects with an attack inflicting #min_damage_1# - #max_damage_1# + #weapon_damage_value#% Weapon Damage and then increasing your Movement Speed by 30% for 8 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/speedy-retaliate.png'
};
