exports.power = {
  name: "Spinning Backfist",
  sources: [
    { type: "class", id: "champion" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["kick-sand"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: "Spin in front of you dealing 104 - 141 + 122% Weapon Damage as Crushing Damage.",
  icon: ""
};
