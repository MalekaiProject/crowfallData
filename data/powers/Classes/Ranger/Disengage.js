exports.power = {
  name: "Disengage",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Non-Aggressive",
  cast_type: "Instant",
  duration: 0,
  cooldown: 45,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['sweep'],
  cost: {
    pips: 0,
    resource: 100
  },
  tooltip: "Leap backwards dealing 244 - 331 + 287% Weapon Damage. Places your Power Tray into Ranged Mode.",
  icon: ""
};
