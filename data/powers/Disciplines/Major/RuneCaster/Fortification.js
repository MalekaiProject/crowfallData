exports.power = {
  name: "Fortification",
  sources: [
    { type: "discipline", sub_type: "major", id: "rune-caster" }
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
    resource: 12
  },
  tooltip: "Aid group members and yourself increasing Health by 1000.",
  icon: ""
};
