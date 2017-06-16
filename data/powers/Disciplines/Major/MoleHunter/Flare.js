exports.power = {
  name: "Flare",
  sources: [
    { type: "discipline", sub_type: "major", id: "Mole Hunter" }
  ],
  type: "Debuff",
  cast_type: "Instant",
  duration: 0,
  cooldown: 23,
  targeting: "Cone",
  max_targets: 5,
  range: 50,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Deploy a flare revealing any Stealth users entering the area. Stealth users revealed in this way are Exposed, take 170 - 230 + 200% Fire Weapon Damage and begin Burning.",
  icon: ""
};
