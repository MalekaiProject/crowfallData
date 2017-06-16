exports.power = {
  name: "Judgement",
  sources: [
    { type: "class", id: "templar" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: ["Execute"],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: "Strike mercillessly inflict 89 - 133 + 111% Weapon Damage. Enemies under 35% health are critically hit for 133 - 200 + 167% Weapon Damage.",
  icon: ""
};
