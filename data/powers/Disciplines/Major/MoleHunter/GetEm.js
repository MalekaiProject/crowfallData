exports.power = {
  name: "Get Em",
  sources: [
    { type: "discipline", sub_type: "major", id: "mole-hunter" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 24,
  targeting: "Cone",
  max_targets: 1,
  range: 35,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Stop an enemy in its tracks causing 85 - 115 + 100% Weapon Damage and Rooting them. If Get 'Em hits an Exposed enemy while they attack or use an ability, they are knocked down and take additional damage.",
  icon: ""
};
