exports.power = {
  name: "Drive",
  sources: [
		{ type: "class", id: "cleric" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 5,
  range: 8,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Stab in front of you for 75 - 92 + 83% Weapon Damage as Piercing Damage. Applies a Weapon Break to all hit, which reduces all Damage they deal by 20% for 15 seconds.",
  icon: ""
};
