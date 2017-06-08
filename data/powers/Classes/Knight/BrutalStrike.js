exports.power = {
  name: "Brutal Strike",
  source: "Knight",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["ShockWave", "Obliterate"],
  cost: {
    pips: 0,
    resource: 22
  },
  tooltip: "Attack in front of you for 144 - 195 + 170% Crushing Weapon Damage.",
  icon: ""
};
