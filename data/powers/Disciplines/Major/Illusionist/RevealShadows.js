exports.power = {
  name: "Reveal Shadows",
  sources: [
    { type: "discipline", sub_type: "major", id: "Illusionist" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 12,
  cooldown: 23,
  targeting: "Self",
  max_targets: 1,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 32
  },
  tooltip: "Activates Shadow Sight for 12 seconds.",
  icon: ""
};
