exports.power = {
  name: "Poisoned Blade",
  sources: [
    { type: "discipline", sub_type: "major", id: "Poisoner" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Poisoned Blade 2"],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Attack for 113 - 153 + 133% Weapon Damage and cause the enemy to become Poisoned taking 8 - 9 + 1% Weapon Damage per tick.",
  icon: ""
};
