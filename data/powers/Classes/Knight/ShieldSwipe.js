exports.power = {
  name: "Shield Swipe",
  sources: [
    { type: "class", id: "knight" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["shield-stun"],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Attack in front of you for 91 - 123 + 107% Crushing Weapon Damage.",
  icon: ""
};
