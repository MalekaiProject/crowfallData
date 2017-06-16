exports.power = {
  name: "Dirge of Dissonance",
  sources: [
    { type: "discipline", sub_type: "major", id: "troubadour" }
  ],
  type: "Melee Attack",
  cast_type: "Toggle",
  duration: 12,
  cooldown: 1,
  targeting: "Point Blank Area",
  max_targets: 5,
  range: 10,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 32
  },
  tooltip: "Sing for 12 seconds, affecting up to 5 enemies within 10m. Deals 100 - 150 + 12% Weapon Damage every 3 seconds. Type 3 Song.",
  icon: ""
};
