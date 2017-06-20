exports.power = {
  name: "Forest Step",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Movement",
  cast_type: "Instant",
  duration: 3,
  cooldown: 24,
  targeting: "Self",
  max_targets: 1,
  range: "",
  next_chain: ["tendon-slice"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: "Blink through the forest shadows forward and gain 50 Movement Speed for 3 seconds.",
  icon: ""
};
