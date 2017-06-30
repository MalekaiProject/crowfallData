exports.power = {
  name: 'Mana Shield',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-focus' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Self',
  max_targets: 5,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Surround yourself with a protective barrier that drains your mana as it prevents damage as well as increasing your Damage Bonus by 5% for 15 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/mana-shield.png'
};
