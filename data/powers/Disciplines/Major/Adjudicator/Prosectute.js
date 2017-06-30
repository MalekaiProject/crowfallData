exports.power = {
  name: 'Prosecute',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'adjudicator' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 0,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Convict an enemy causing damage based on their sin: 1 Sin or less: 68-92 + 80% Weapon Damage\n2 Sin: 131-177 + 154% Weapon Damage\n3 Sin: 199-270 + 235% Weapon Damage\n4 Sin: 274-370 + 322% Weapon Damage\n5 Sin: 354-478 + 416% Weapon Damage',
  icon: 'https://cdn.malekai.network/images/powers/prosecute.png'
};
