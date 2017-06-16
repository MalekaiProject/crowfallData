exports.power = {
  name: "Noble Blood",
  sources: [
    { type: "class", id: "knight" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["oath-of-will"],
  cost: {
    pips: 0,
    resource: 22
  },
  tooltip: "Shout and deal 60 - 81 + 70% Weapon Damage to enemies in a sphere around you. If any enemy is hit, you gain an Absorption Barrier for 12 seconds.",
  icon: ""
};
