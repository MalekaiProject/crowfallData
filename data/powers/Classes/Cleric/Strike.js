exports.power = {
  name: "Strike",
  sources: [
    { type: "class", id: "cleric" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["side-strike"],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Strike in front of you for 90 - 110 + 100% Weapon Damage, generating 0.9 Rage #restore_type_time# if you hit.",
  icon: ""
};
