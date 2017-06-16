exports.power = {
  name: "Cut and Thrust 2",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Pistols" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Penetrate an enemy's Block or Parry Stunning them and inflicting 70 - 95 + 83% Weapon Damage.",
  icon: ""
};
