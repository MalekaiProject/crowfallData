exports.power = {
  name: "Reveal Weakness",
  sources: [
    { type: "discipline", sub_type: "major", id: "Shield Breaker" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 30,
  cooldown: 45,
  targeting: "Group",
  max_targets: 5,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 13
  },
  tooltip: "Enhance group members and yourself increasing Physical Armor Penetration by 10.",
  icon: ""
};
