exports.power = {
  name: "Adjudicate",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Adjudicator" }
	],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,ws
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Adjudicate 2"],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Smash an enemy for 68-92 + 80% Weapon Damage.",
  icon: ""
};
