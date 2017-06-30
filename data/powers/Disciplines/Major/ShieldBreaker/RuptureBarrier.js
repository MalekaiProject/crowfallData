exports.power = {
  name: 'Rupture Barrier',
  sources: [
    {
      type: 'discipline',
      sub_type: 'major',
      id: 'shield-breaker'
    }
  ],
  type: 'Passive',
  cast_type: 'Passive',
  duration: 0,
  cooldown: 0,
  targeting: 'Self',
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: 'Cause an additional 50% Weapon Damage when striking a Barrier and restore your Resource.',
  icon: 'IMAGE_ENDPOINT/powers/rupture-barrier.png'
};
