exports.power = {
  name: "Fire Eater",
  sources: [
    { type: "discipline", sub_type: "major", id: "firewalker" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 45,
  targeting: "Self",
  max_targets: 1,
  range: 0,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 15
  },
  tooltip: "Absorb heat from incoming Fire damage attacks to heal for 125% of Fire damage inflicted.",
  icon: ""
};
