exports.power = {
  name: "Laceration",
  sources: [
		{ type: "class", id: "ranger" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: "Slash in front of you for 93 - 126 + 110% Weapon Damage. Applies a Weapon Break which reduces all damage by 20% for 15 seconds.",
  icon: ""
};
