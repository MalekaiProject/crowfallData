exports.power = {
  name: "Clobber",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Hammers" }
	],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Clobber 2"],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Smash an enemy for 68 - 92 + 80% Weapon Damage.",
  icon: ""
};
