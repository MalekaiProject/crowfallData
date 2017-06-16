exports.power = {
  name: "Barrage",
  sources: [
		{ type: "class", id: "ranger" }
	],
  type: "Ranged Attack",
  cast_type: "Ground Aimed",
  duration: 0,
  cooldown: 9,
  targeting: "Area",
  max_targets: 5,
  range: 35,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 6
  },
  tooltip: "Shoot 6 volley of arrows at a ground location, dealing 30 - 40 + 35% Weapon Damage per volley, up to 5 targets within 8m.",
  icon: ""
};
