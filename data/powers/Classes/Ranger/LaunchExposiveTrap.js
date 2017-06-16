exports.power = {
  name: "Launch Explosive Trap",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Ranged Attack",
  cast_type: "Ground Aimed",
  duration: 0,
  cooldown: 24,
  targeting: "Area",
  max_targets: 5,
  range: "",
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Shoot an explosive trap at a ground location, which explodes when an enemy approaches it dealing 46 - 62 + 54% Weapon Damage as Fire Damage. Knocks Up all hit. Trap will exist for 60 seconds.",
  icon: ""
};
