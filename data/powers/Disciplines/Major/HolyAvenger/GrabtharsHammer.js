exports.power = {
  name: "Grabthars Hammer",
  sources: [
    { type: "discipline", sub_type: "major", id: "Holy Avenger" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Grabthars Hammer 2"],
  cost: {
    pips: 0,
    resource: 11
  },
  tooltip: "Smite an enemy for 91 - 124 + 108% Weapon Damage.",
  icon: ""
};
