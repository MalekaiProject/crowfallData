exports.power = {
  name: "Fountain of Life",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Naiad" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 10,
  cooldown: 20,
  targeting: "Area",
  max_targets: 4,
  range: 35,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 46
  },
  tooltip: "Creates a Fountain of Life at the targetted location, which chain heals allies who walk near it. The fountain lasts 10 seconds or 30 heals.",
  icon: ""
};
