exports.power = {
  name: "Purgative",
  sources: [
    { type: "discipline", sub_type: "major", id: "Field Surgeon" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Group",
  max_targets: 5,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Cleanse your group and yourself of damage over time effects healing for 32 - 39 + 35% Weapon Damage for each effect removed.",
  icon: ""
};
