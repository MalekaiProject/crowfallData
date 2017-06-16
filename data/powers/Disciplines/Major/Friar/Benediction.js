exports.power = {
  name: "Benediction",
  sources: [
    { type: "discipline", sub_type: "major", id: "friar" }
  ],
  type: "Temporary Buff",
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
  tooltip: "Benediction Bless group members and yourself increasing Bleed Armor by 50 for 30 seconds.",
  icon: ""
};
