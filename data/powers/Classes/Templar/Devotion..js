exports.power = {
  name: "Devotion",
  sources: [
		{ type: "class", id: "templar" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 23,
  targeting: "Group",
  max_targets: 5,
  range: "",
  next_chain: [],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: "Recite a benediction healing group members and you based on the damage you inflict and revealing Sin within enemies attacked for 15 seconds.",
  icon: ""
};
