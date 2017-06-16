exports.power = {
  name: "Lightning Strike",
  sources: [
    { type: "class", id: "druid" }
  ],
  type: "Ranged Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 24,
  targeting: "Ray",
  max_targets: 5,
  range: 35,
  next_chain: ["aurora-emitter"],
  cost: {
    pips: 0,
    resource: 46
  },
  tooltip: "Strike enemies with lightning for 109 - 163 + 136% Weapon Damage and Dazing them.",
  icon: ""
};
