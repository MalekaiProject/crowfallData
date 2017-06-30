exports.power = {
  name: 'Song Twisting',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'twisting' }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 6,
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
  tooltip: 'Singing 4 different songs with 6 seconds activates Pure Voice buff on you, which greatly increases the effects of the next song played.',
  icon: 'IMAGE_ENDPOINT/powers/song-twisting.png'
};
