exports.power = {
  name: 'Alter Reality',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'reality-warper' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Self',
  max_targets: 1,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Place a Heal Absorption shield on the target which absorbs incoming heals. In order to remove the shield the target must be healed for #buff_amount_1#. If the shield is not healed off before 15 seconds, it will explode dealing #min_damage_1# - #max_damage_1# damage to those nearby.',
  icon: ''
};
