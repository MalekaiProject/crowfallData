exports.power = {
  name: "Vile Slash",
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
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Slash in front of you twice for 45 - 61 + 53% Weapon Damage. Applies an Armor Break to all hit, which reduces all Physical Mitigations by 20% for 15 seconds.",
  icon: ""
};
