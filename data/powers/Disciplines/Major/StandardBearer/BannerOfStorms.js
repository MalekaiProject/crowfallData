exports.power = {
  name: 'Banner of Storms',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'standard-bearer' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 23,
  targeting: 'Area',
  max_targets: 5,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Deploy a banner overriding the damage of all nearby group members to Electric and increasing their Electric Armor by 25.',
  icon: 'IMAGE_ENDPOINT/powers/banner-of-storms.png'
};
