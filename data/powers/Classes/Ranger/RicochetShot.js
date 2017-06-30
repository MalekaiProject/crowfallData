exports.power = {
  name: 'Ricochet Shot',
  sources: [
    { type: 'class', id: 'ranger' }
  ],
  type: 'Ranged Attack',
  cast_type: 'Charged',
  duration: 10,
  cooldown: 23,
  targeting: 'Reticle',
  max_targets: 1,
  range: 40,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: 'Charge an arrow and shoot it towards your reticle dealing 158 - 213 + 186% Weapon Damage. The arrow will chain to a second target within 6m and then chain to a third target. If you hit 3 targets with this power applies 150 Critical Hit Damage for 10 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/ricochet-shot.png'
};
