exports.power = {
  name: "Restoration Strike 2",
  sources: [
		{ type: "discipline", sub_type: "weapon", id: "Master of Swords" }
	],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: "Strike an enemy for 117-159 + 138% Weapon Damage while restoring your Resource.",
  icon: ""
};
