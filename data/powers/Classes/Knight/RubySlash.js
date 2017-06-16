exports.power = {
  name: "Ruby Slash",
  sources: [
    { type: "class", id: "knight" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["emerald-slash"],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "A basic attack slashing in front of you for 60 - 82 + 71% Weapon Damage. Scoring three or more consecutive basic attack hits activates SHIELD BASH.",
  icon: ""
};
