exports.power = {
  name: "Furious Retaliate",
  sources: [
		{ type: "discipline", sub_type: "major", id: "Juggernaut" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 15,
  targeting: "Sphere",
  max_targets: 5,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Recover immediately from Knockdown and Stun effects inflicting 113 - 153 + 133% Weapon Damage. Furious Retaliate also increases your Resolve, reducing the duration of subsequent Control Effects or triggering temporary immunity to Control Effects.",
  icon: ""
};
