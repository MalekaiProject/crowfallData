exports.power = {
  name: "Song of Speed",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Bard" }
	],
  type: "Temporary Buff",
  cast_type: "Toggle",
  duration: 12,
  cooldown: 1,
  targeting: "Group",
  max_targets: 5,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "While Out of Combat increases the groups Movement Speed by 35% for 12 seconds. While In Combat increases the groups Movement Speed by 10% for 12 seconds. Type 1 Song.",
  icon: ""
};
