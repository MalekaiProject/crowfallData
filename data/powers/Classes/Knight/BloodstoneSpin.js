exports.power = {
  name: "Bloodstone Spin",
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
  next_chain: ["BloodStone Spin"],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "A basic attack slashing spinning in front of you for 88 - 119 + 103% Weapon Damage and reducing movement speed by 50%. Scoring three or more consecutive basic attack hits activates SHIELD BASH.",
  icon: ""
};
