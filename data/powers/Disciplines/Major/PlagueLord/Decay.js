exports.power = {
  name: "Decay",
  sources: [
    { type: "discipline", sub_type: "major", id: "Plague Lord" }
  ],
  type: "Debuff",
  cast_type: "Charged",
  duration: 0,
  cooldown: 45,
  targeting: "Ray",
  max_targets: 1,
  range: 30,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: "Infect an enemy with a Disease and reduce Healing Received.  If Decay hits an Exposed enemy while they attack or use an ability, they are knocked down and take additional damage.",
  icon: ""
};
