exports.power = {
  name: "Wicked Slash",
  sources: [
    { type: "class", id: "ranger" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["vile-slash"],
  previous_chain: ['sinister-slash'],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Slash in front of you twice for 50 - 68 + 59% Weapon Damage. Applies an Armor Fracture to all hit, which reduces all Physical Mitigations by 10% for 15 seconds.",
  icon: ""
};
