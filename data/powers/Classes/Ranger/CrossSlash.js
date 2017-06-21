exports.power = {
  name: "Cross Slash",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["cross-slash-2"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 31
  },
  tooltip: "Slash in front of you for 35 - 47 + 41% Weapon Damage. Applies a Moderate Bleed effect.",
  icon: ""
};
