exports.power = {
  name: "Natural Bond",
  sources: [
    { type: "class", id: "druid" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 45,
  cooldown: 5,
  targeting: "Group",
  max_targets: 5,
  range: "",
  next_chain: ["contain-essence", "empower"],
  previous_chain: ['natures-grace'],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Buffs Damage Bonus by 5% for group members and yourself for 45 seconds.",
  icon: ""
};
