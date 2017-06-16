exports.power = {
  name: "Slow Demise 2",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "Master of Daggers" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 45,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Torment an enemy reducing their Healing Bonus and inflicting 79 - 108 + 94% Weapon Damage.",
  icon: ""
};
