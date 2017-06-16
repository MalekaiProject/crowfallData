exports.power = {
  name: "Insanity",
  sources: [
    { type: "discipline", sub_type: "major", id: "destroyer" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 45,
  targeting: "Self",
  max_targets: 3,
  range: 12,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Bolster your combat prowess increasing your Health maximum by 17.5 for each point of current Rage.",
  icon: ""
};
