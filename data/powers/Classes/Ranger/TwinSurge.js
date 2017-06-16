exports.power = {
  name: "Twin Surge",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["laceration"],
  cost: {
    pips: 0,
    resource: 25
  },
  tooltip: "Slash in front of you with both blades dealing 57 - 77 + 67% Weapon Damage twice.",
  icon: ""
};
