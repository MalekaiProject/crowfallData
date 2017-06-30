exports.power = {
  name: 'Shield Glare 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-shields' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 30,
  targeting: 'Cone',
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['shield-glare'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: 'Blind an enemy with light reflected from your shield causing 104 - 140 + 122% Weapon Damage.',
  icon: 'IMAGE_ENDPOINT/powers/shield-glare-2.png'
};
