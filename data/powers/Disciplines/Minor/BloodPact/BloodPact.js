exports.power = {
  name: "Blood Pact",
  sources: [
    { type: "discipline", sub_type: "minor", id: "Blood Pact" }
  ],
  type: "Hanging Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 45,
  targeting: "Self",
  max_targets: 1,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Grants a Blood Pact for 15 seconds, which all powers to consume Hitpoints instead of their normal ressource type.",
  icon: ""
};
