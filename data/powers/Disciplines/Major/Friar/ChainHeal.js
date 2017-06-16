exports.power = {
  name: "Chain Heal",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Friar" }
	],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Ray",
  max_targets: 2,
  range: 35,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 22
  },
  tooltip: "Heals a targeted ally for 158 - 193 + 175% Weapon Damage, then jumps to heal a nearby ally. Chain Heal will jump to as many as 2 with healing reduced by 30% each jump.",
  icon: ""
};
