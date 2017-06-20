exports.power = {
  name: "Nature's Grace",
  sources: [
    { type: "class", id: "druid" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 45,
  cooldown: 68,
  targeting: "Self",
  max_targets: 5,
  range: "",
  next_chain: ["natural-bond"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 22
  },
  tooltip: "Increase Healing by 10% for 45 seconds.",
  icon: ""
};
