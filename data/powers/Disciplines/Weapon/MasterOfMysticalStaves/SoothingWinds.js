exports.power = {
  name: 'Soothing Winds',
  sources: [
    { type: 'discipline', sub_type: 'weapon', id: 'master-of-mystical-staves' }
  ],
  type: 'Buff',
  cast_type: 'Instant',
  duration: 20,
  cooldown: 0,
  targeting: 'Ray',
  max_targets: 5,
  range: 35,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Heals a targeted ally instantly for 32 - 39 + 35% Weapon Damage, and then jumps to a nearby ally.  Each player healed will heal every second for an additional 15 seconds.  SOOTHING WINDS will jump to as many as 5 with healing reduced by 30% each jump.',
  icon: ''
};
