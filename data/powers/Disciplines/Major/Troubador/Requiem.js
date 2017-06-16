exports.power = {
  name: "Requiem",
  sources: [
    { type: "discipline", sub_type: "major", id: "Troubadour" }
  ],
  type: "Debuff",
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
  tooltip: "Sing for 12 seconds, affecting up to 5 enemies within 10m. Increases their Damage Taken by 15%. Type 2 Song.",
  icon: ""
};
