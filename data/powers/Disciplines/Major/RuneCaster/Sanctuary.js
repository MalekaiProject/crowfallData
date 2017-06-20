exports.power = {
  name: "Sanctuary",
  sources: [
    { type: "discipline", sub_type: "major", id: "rune-caster" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 30,
  cooldown: 23,
  targeting: "Area",
  max_targets: 5,
  range: 10,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Defend an area with a runic symbol increasing allies' All Armor by 20%.",
  icon: ""
};
