exports.power = {
  name: 'Critical Hack 2',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-swords' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 15,
  cooldown: 23,
  targeting: 'Cone',
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: 'Strike an enemy twice for 87-118 +103% Weapon Damage and increase your Critical Hit Chance',
  icon: 'IMAGE_ENDPOINT/powers/critical-hack-2.png'
};
