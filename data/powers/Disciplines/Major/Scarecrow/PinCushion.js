exports.power = {
  name: 'Pin Cushion',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'scarecrow' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Gain a Piercing damage immune Barrier for 15 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/pin-cushion.png'
};
