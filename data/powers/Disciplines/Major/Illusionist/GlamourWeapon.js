exports.power = {
  name: "Glamour Weapon",
  sources: [
    { type: "discipline", sub_type: "major", id: "illusionist" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 180,
  cooldown: 23,
  targeting: "Self",
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Add a Glamour to your weapon increasing Maximum Weapon Damage by 50 for 30 seconds.",
  icon: ""
};
