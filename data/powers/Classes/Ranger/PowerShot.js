exports.power = {
  name: "Power Shot",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Ranged Attack",
  cast_type: "Charged",
  duration: 0,
  cooldown: 0,
  targeting: "Reticle",
  max_targets: 1,
  range: 40,
  next_chain: ["multi-purpose-shot"],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Shoot and arrow towards your reticle that deals 227 - 307 + 267% Weapon Damage.",
  icon: ""
};
