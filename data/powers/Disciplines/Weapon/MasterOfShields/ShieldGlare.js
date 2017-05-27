exports.power = {
  name: "Shield Glare",
  source: "Master of Shields",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Shield Glare 2"], 
  cost: {
    pips: 0,
    resource: 15
  },
  tooltip: "Smash an enemy if the face for 110 - 148 + 129% Weapon Damage.",
  icon: ""
};
