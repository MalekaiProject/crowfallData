exports.power = {
  name: "Sinister Slash",
  sources: [
		{ type: "class", id: "ranger" }
	],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Wicked Slash"],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Slash in front of you twice for 37 - 51 + 44% Weapon Damage. Applies an Armor Crack to all hit, which reduces all Physical Mitigations by 5% for 15 seconds.",
  icon: ""
};
