exports.power = {
  name: "Onslaught",
  source: "Knight",
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Brutal Strike", "Twin Assault"],
  cost: {
    pips: 0,
    resource: 12
  },
  tooltip: "Attack in front of you twice for 62 - 84 + 73% Weapon Damage each strike.",
  icon: ""
};
