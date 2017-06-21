exports.power = {
  name: "Dagger Spin",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 5,
  targeting: "Sphere",
  max_targets: 5,
  range: 6,
  next_chain: ["dagger-spin-2"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 34
  },
  tooltip: "Spin in place and deal 41 - 55 + 48% Weapon Damage around you. Also increases your Lifesteal Bonus by 60% while executing this power.",
  icon: ""
};
