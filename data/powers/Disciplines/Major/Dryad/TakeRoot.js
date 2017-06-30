exports.power = {
  name: 'Take Root',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'dryad' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 2,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Standing still for 2 seconds increases Healing Bonus by 20% and Physical Mitigations by 5% until you move.',
  icon: 'IMAGE_ENDPOINT/powers/take-root.png'
};
