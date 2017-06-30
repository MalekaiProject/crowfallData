exports.power = {
  name: 'Jelly Skin',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'mudman' }
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
  tooltip: 'Protect yourself with skin like rubber granting you a barrier with immunity to Crushing damage.',
  icon: 'IMAGE_ENDPOINT/powers/jelly-skin.png'
};
