exports.power = {
  name: "Fire Tornados",
  sources: [
    { type: "class", id: "confessor" }
  ],
  type: "Ranged Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 30,
  targeting: "Sphere",
  max_targets: 5,
  range: 3,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 120
  },
  tooltip: "Consumes your Hellfire Aura and launches 2 Hellfire Tornados forward which pull nearby object into them and damages them for 105 - 157 + 131% Weapon Damage as Fire Damage. Each tornado last 15 seconds.",
  icon: ""
};
