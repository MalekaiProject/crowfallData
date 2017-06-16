exports.power = {
  name: "Toughness",
  sources: [
    { type: "discipline", sub_type: "major", id: "Juggernaut" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 45,
  cooldown: 68,
  targeting: "Group",
  max_targets: 5,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Strengthen group members and yourself increasing their Maximum Health by 20% for 45 seconds.",
  icon: ""
};
