exports.power = {
  name: "Critical Slice 2",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-rapiers" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['critical-slice'],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Gain the advantage over an enemy increasing your Critical Hit Damage and causing 94 - 127 + 111% Weapon Damage.",
  icon: ""
};
