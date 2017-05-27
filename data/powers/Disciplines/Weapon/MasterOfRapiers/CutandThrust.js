exports.power = {
  name: "Cut and Thrust",
  source: "Master of Rapiers",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Cut and Thrust 2"],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Stab an enemy twice for 70 - 95 + 82% Weapon Damage.",
  icon: ""
};
