exports.power = {
  name: "Critical Hack",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Swords" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 5,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Strike an enemy twice for 87-118 +103% Weapon Damage and increase your Critical Hit Chance",
  icon: ""
};
