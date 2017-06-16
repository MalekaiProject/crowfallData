exports.power = {
  name: "Blood Strike",
  sources: [
    { type: "discipline", sub_type: "major", id: "Blade Master" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 5,
  range: 5,
  next_chain: ["Blood Strike 2"],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Slash enemies for 45 - 60 + 53% Weapon Damage.",
  icon: ""
};
