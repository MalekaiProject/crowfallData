exports.power = {
  name: "Muck Spatter",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Mudman" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 30,
  targeting: "Self",
  max_targets: 0,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Crushing attacks made against you have a chance to cause nearby enemies to be afflicted with Blindness and Severe Corruption.",
  icon: ""
};
