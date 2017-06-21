exports.power = {
  name: "Net Pull",
  sources: [
    { type: "class", id: "myrmidon" }
  ],
  type: "Crowd Control",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Reticle",
  max_targets: 1,
  range: 30,
  next_chain: [],
  previous_chain: ['cast-net'],
  cost: {
    pips: 0,
    resource: 17
  },
  tooltip: "Pull your target toward you inflicting 95 - 116 + 106% Weapon Damage.",
  icon: ""
};
