exports.power = {
  name: "Critical Hack",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-swords" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 5,
  range: 5,
  next_chain: ["criticalhack2"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Slash an enemy for 131-177 +154% Weapon Damage.",
  icon: ""
};
