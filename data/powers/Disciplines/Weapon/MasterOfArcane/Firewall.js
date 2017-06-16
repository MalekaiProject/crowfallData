exports.power = {
  name: "Firewall",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Arcane" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Rectangle",
  max_targets: 5,
  range: 10,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Summon a raging inferno to slow and damage any enemies for 30 - 40 + 35% Fire Weapon Damage.",
  icon: ""
};
