exports.power = {
  name: 'Throw Illusion Shield',
  sources: [
    { type: 'discipline', sub_type: 'major', id: 'shield-fighter' }
  ],
  type: 'Melee Attack',
  cast_type: 'Instant',
  duration: 0,
  cooldown: 9,
  targeting: 'Cone',
  max_targets: 2,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: 'Throw an illusion shield and ricochet off multiple nearby enemies for 85 - 115 + 100% Weapon Damage.  THROW ILLUSION SHIELD will ricochet to as many as 2 with damage reduced by 30% each ricochet.', // Fucking Captain America - No one even likes him.
  icon: ''
};
