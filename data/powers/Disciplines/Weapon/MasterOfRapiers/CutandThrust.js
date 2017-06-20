exports.power = {
  name: "Cut and Thrust",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-rapiers" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["cut-and-thrust-2"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Stab an enemy twice for 70 - 95 + 82% Weapon Damage.",
  icon: ""
};
