exports.power = {
  name: "Cast Net",
  sources: [
    { type: "class", id: "myrmidon" }
  ],
  type: "Crowd Control",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Reticle",
  max_targets: 1,
  range: 30,
  next_chain: ["net-pull", "charge"],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: "Fling a net at your target rooting them in place and inflicting 83 - 102 + 93% Weapon Damage.",
  icon: ""
};
