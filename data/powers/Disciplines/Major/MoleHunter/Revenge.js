exports.power = {
  name: 'Revenge',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'mole-hunter' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 30,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Increase your Critical Hit Chance and Critical Hit Damage by 25 for 30 seconds when damaged by a Stealth attack.',
  icon: 'IMAGE_ENDPOINT/powers/revenge.png'
};
