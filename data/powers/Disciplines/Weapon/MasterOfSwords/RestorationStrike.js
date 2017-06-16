exports.power = {
  name: "Restoration Strike",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "Master of Swords" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Restoration Strike 2"],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: "Slice an enemy for 117-159 + 138% Weapon Damage.",
  icon: ""
};
