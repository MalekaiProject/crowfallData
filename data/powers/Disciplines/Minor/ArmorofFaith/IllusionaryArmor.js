exports.power = {
  name: 'Illusionary Armor',
  sources: [
    { type: 'discipline', sub_type: 'minor', id: 'armor-of-faith' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Conjure an illusion effective enough to reduce incoming damage by 20% for 20 seconds.',
  icon: 'https://cdn.malekai.network/images/powers/illusionary-armor.png'
};
