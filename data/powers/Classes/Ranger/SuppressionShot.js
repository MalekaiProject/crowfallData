exports.power = {
  name: "Suppression Shot",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Crowd Control",
  cast_type: "Ground Aimed",
  duration: 0,
  cooldown: 30,
  targeting: "Area",
  max_targets: 5,
  range: 35,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: "Shoot at a ground location dealing 93 - 126 + 109% Weapon Damage. Applies a Suppression effect to all hit.",
  icon: ""
};
