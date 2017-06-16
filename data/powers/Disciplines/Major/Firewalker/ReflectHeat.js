exports.power = {
  name: "Reflect Heat",
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
  cost: {
    pips: 0,
    resource: 6
  },
  tooltip: "Reflects 50% Fire Weapon Damage back to the source of a Fire damage attack.",
  icon: ""
};
