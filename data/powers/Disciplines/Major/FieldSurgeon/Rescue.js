exports.power = {
  name: 'Rescue',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'field-surgeon' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 10,
  cooldown: 45,
  targeting: 'Reticle',
  max_targets: 1,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Avert an ally\'s imminent death for 10 seconds preventing them from dropping below 1 Health and healing them for 473 - 578 + 525% Weapon Damage. Recently Rescued allies may not be effected by Rescue.',
  icon: 'IMAGE_ENDPOINT/powers/rescue.png'
};
