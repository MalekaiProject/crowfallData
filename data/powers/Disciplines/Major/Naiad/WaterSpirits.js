exports.power = {
  name: 'Water Spirits',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'naiad' }
  ],
  type: 'Buff',
  cast_type: 'Charged',
  duration: 20,
  cooldown: 25,
  targeting: 'Area',
  max_targets: 3,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 46
  },
  tooltip: 'Summon and launch a Water Spirit forward which heals allies within 5m of the Water Spirit. Water Spirits last 20 seconds or 30 heals. Only heals each player a maximum of 5 times. Enemies hit by the Water Spirit suffer a 30% to Damage Bonus Fire for 20 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/water-spirits.png'
};
