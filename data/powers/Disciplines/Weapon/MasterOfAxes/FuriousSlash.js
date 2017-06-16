exports.power = {
  name: "Furious Slash",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "Master of Axes" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 0,
  next_chain: ["Furious Slash 2"],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Hack at an enemy for 110 - 149 + 129% Weapon Damage.",
  icon: ""
};
