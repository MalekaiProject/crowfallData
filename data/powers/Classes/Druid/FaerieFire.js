exports.power = {
  name: 'Faerie Fire',
  sources: [
    { type: 'class', id: 'druid' }
  ],
  type: 'Debuff',
  cast_type: 'Instant',
  duration: 12,
  cooldown: 45,
  targeting: 'Reticle',
  max_targets: 1,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 50
  },
  tooltip: 'Engulf an enemy in Faerie Fire reducing Slashing, Piercing and Crushing armor and causing 44 - 67 Nature damage + 6% Weapon Damage over 12 seconds.',
  icon: 'IMAGE_ENDPOINT/powers/faerie-fire.png'
};
