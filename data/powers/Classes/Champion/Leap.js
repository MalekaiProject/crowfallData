exports.power = {
  name: "Leap",
  sources: [
    { type: "class", id: "champion" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Sphere",
  max_targets: 5,
  range: 4,
  next_chain: ["leap-2"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Leap forward, dealing 65 - 88 + 77% Weapon Damage as Crushing Damage as you land. Briefly able to perform a second Leap for zero resource cost.",
  icon: ""
};
