exports.power = {
  name: 'Aura of Terror',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'scarecrow' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 30,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Surround yourself with a chilling aura of palpable fear that automatically reveals Stealthed enemies.  Enemies who remain nearby for too long are Suppressed and then afflicted with Frostbite.',
  icon: 'IMAGE_ENDPOINT/powers/aura-of-terror.png'
};
