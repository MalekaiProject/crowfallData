exports.power = {
  name: "Bloodied Swipe",
  sources: [
    { type: "class", id: "myrmidon" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5.5,
  next_chain: ["Gore", "Colossus Smash"],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Leap forward striking twice for 39 - 48 + 43% Weapon Damage.",
  icon: ""
};
