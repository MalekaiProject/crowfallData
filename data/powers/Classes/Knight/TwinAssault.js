exports.power = {
  name: "Twin Assault",
  source: "Knight",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 7.5,
  next_chain: ["ShockWave", "Obliterate"],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: "Attack in front of you twice for 43 - 58 + 51% Weapon Damage each hit.",
  icon: ""
};
