exports.power = {
  name: 'Stink Bomb',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'agent-provocateur' }
  ],
  type: 'Crowd Control',
  cast_type: 'Ground Aimed',
  duration: 0,
  cooldown: 30,
  targeting: 'Area',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: 'Torment enemies with a noxious targeted area attack Stunning and afflicting them with Moderate Corruption while maintaining Stealth.',
  icon: 'IMAGE_ENDPOINT/powers/stink-bomb.png'
};
