exports.power = {
  name: "Cauterize",
  sources: [
    { type: "discipline", sub_type: "major", id: "knife-grinder" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Self",
  max_targets: 0,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Remove Bleeding effects.",
  icon: ""
};
