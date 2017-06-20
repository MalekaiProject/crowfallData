exports.power = {
  name: "Cross Slash 2",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['cross-slash'],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: "Slash in front of you for 86 - 117 + 101% Weapon Damage. Applies a Moderate Bleed effect.",
  icon: ""
};
