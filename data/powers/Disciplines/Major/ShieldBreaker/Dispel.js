exports.power = {
  name: "Dispel",
  sources: [
    { type: "discipline", sub_type: "major", id: "shield-breaker" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Reticle",
  max_targets: 5,
  range: 15,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: "Strip away an enemy's Barrier inflicting 91 - 123 + 107% Weapon Damage and causing Knockdown if a Barrier is removed.",
  icon: ""
};
