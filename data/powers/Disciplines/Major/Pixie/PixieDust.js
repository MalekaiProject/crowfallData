exports.power = {
  name: "Pixie Dust",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Pixie" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 25,
  cooldown: 45,
  targeting: "Area",
  max_targets: 5,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: "Blanket the targeted area with Pixie Dust, increasing Incoming Healing by 25% for 25 seconds.",
  icon: ""
};
