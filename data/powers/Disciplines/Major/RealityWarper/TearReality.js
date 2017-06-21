exports.power = {
  name: "Tear Reality",
  sources: [
    { type: "discipline", sub_type: "major", id: "reality-warper" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 9,
  cooldown: 45,
  targeting: "Self",
  max_targets: 1,
  range: 8,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: "Tear Reality 8m around you every 3 seconds for 9 seconds, all targets hit have all powers with an active cooldown increased by 3 seconds.",
  icon: ""
};
