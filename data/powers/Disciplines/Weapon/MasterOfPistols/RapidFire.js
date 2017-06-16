exports.power = {
  name: "Rapid Fire",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "Master of Pistols" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 9,
  targeting: "Ray",
  max_targets: 1,
  range: 15,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Unleash a deadly barrage of hot lead causing 28 - 43 + 36% Weapon Damage.  If Rapid Fire hits an Exposed enemy while they attack or use an ability, they are knocked down and take additional damage.",
  icon: ""
};
