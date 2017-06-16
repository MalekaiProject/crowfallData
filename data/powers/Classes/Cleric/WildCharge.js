exports.power = {
  name: "Wild Charge",
  sources: [
    { type: "class", id: "cleric" }
  ],
  type: "Melee Attack",
  cast_type: "Hold Channeled",
  duration: 0,
  cooldown: 24,
  targeting: "Rectangle",
  max_targets: 1,
  range: 12,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 21
  },
  tooltip: "Charge forward while the input key is depressed, dealing 110 - 135 + 123% Weapon Damage to anything in your way.",
  icon: ""
};
