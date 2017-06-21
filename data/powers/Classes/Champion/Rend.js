exports.power = {
  name: "Rend",
  sources: [
    { type: "class", id: "champion" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 24,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['vicious-stomp'],
  cost: {
    pips: 0,
    resource: 23
  },
  tooltip: "Rend in front of you, dealing 234 - 316 + 275% Weapon Damage. Applies a Severe Bleed to all hit.",
  icon: ""
};
