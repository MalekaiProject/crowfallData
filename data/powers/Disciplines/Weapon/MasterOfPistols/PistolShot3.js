exports.power = {
  name: "Pistol Shot 3",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "Master of Pistols" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Ray",
  max_targets: 1,
  range: 15,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 18
  },
  tooltip: "Shoot an enemy for 95 - 143 + 119% Weapon Damage while generating a Pip with a chance to reset the cooldown of Rapid Fire.",
  icon: ""
};
