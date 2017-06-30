exports.power = {
  name: 'Impale',
  sources: [
    { type: 'class', id: 'duelist' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 1,
    resource: 0
  },
  tooltip: 'A devastating stab to the vitals inflicting instant damage and causing your target to bleed for #N/A - #N/A + #N/A% Weapon Damage until the target is either fully healed or they drop below a certain health threshold. Effects scale with Pips spend. 1 Pip: 125 - 188 and Bleed until under 90% Health. 2 Pips: 250 - 376 and Bleed until under 80% Health. 3 Pips: 375 - 564 and Bleed until under 70% Health. 4 Pips: 500 - 762 and Bleed until under 60% Health. 5 Pips: 625 - 940 and Bleed until under 50% Health.',
  icon: 'IMAGE_ENDPOINT/powers/impale.png'
};
