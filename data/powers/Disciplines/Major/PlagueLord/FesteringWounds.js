exports.power = {
  name: "Festering Wounds",
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
  tooltip: "Plague an enemy with Disease and for 30 seconds any Heal ability they use leaves them in an Exposed state.",
  icon: ""
};
