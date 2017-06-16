exports.power = {
  name: "Critical Hack",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Swords" }
	],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 5,
  range: 5,
  next_chain: ["CriticalHack2"],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Slash an enemy for 131-177 +154% Weapon Damage.",
  icon: ""
};
