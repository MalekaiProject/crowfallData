exports.power = {
  name: "Poisoned Blade 2",
  sources: [
    { type: "discipline", sub_type: "major", id: "Poisoner" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Attack for 86 - 117 + 101% Weapon Damage and cause the enemy to become Poisoned taking 8 - 9 + 1% Weapon Damage per tick.",
  icon: ""
};
