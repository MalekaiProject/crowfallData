exports.power = {
  name: "Blade Turning",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Militant Mage" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 45,
  targeting: "Self",
  max_targets: 0,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Gain a Slashing damage immune Barrier for 15 seconds.",
  icon: ""
};
