exports.power = {
  name: "Wee One",
  sources: [
    { type: "discipline", sub_type: "major", id: "pixie" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 25,
  cooldown: 45,
  targeting: "Area",
  max_targets: 5,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 14
  },
  tooltip: "Shrink the targeted area down to size, reducing Damage Bonus by 20% for 25 seconds.  This debuff stacks up to 3 times.",
  icon: ""
};
