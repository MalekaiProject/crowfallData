exports.power = {
  name: "Lament of Sadness",
  sources: [
    { type: "discipline", sub_type: "major", id: "troubadour" }
  ],
  type: "Debuff",
  cast_type: "Toggle",
  duration: 12,
  cooldown: 1,
  targeting: "Point Blank Area",
  max_targets: 5,
  range: 10,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 32
  },
  tooltip: "Sing for 12 seconds, affecting up to 5 enemies within 10m. Decreases their Attack Power by 150 as well as Support Power by 150. Type 4 Song.",
  icon: ""
};
