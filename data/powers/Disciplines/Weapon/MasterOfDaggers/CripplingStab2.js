exports.power = {
  name: "Crippling Stab 2",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Daggers" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 30,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 6
  },
  tooltip: "Traumatize an enemy increasing their cooldown times and causing 49 - 67 + 58% Weapon Damage.",
  icon: ""
};
