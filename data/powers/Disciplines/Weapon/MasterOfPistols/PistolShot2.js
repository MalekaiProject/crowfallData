exports.power = {
  name: "Pistol Shot 2",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-pistols" }
  ],
  type: "Ranged Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Ray",
  max_targets: 1,
  range: 15,
  next_chain: ["Pistol Shot 3"],
  cost: {
    pips: 0,
    resource: 21
  },
  tooltip: "Shoot an enemy for 85 - 127 + 106% Weapon Damage while generating a Pip with a chance to reset the cooldown of Rapid Fire.",
  icon: ""
};
