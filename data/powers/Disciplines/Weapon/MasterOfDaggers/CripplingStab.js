exports.power = {
  name: "Crippling Stab",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-daggers" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Crippling Stab 2"],
  cost: {
    pips: 0,
    resource: 7
  },
  tooltip: "Stab an enemy for 48 - 64 + 56% Weapon Damage.",
  icon: ""
};
