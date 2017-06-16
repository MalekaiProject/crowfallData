exports.power = {
  name: "Will of the Stoneborn",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Maces" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 30,
  cooldown: 45,
  targeting: "Self",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16  },
  tooltip: "Fortify your defense increasing your Crushing armor and improving weapon efficiency.",
  icon: ""
};
