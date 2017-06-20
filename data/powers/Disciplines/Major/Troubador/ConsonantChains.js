exports.power = {
  name: "Consonant Chains",
  sources: [
    { type: "discipline", sub_type: "major", id: "troubadour" }
  ],
  type: "Debuff",
  cast_type: "Toggle",
  duration: 12,
  cooldown: 6,
  targeting: "Ray",
  max_targets: 5,
  range: 20,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 32
  },
  tooltip: "Damages a targeted enemy for 227 - 307 + 267% Weapon Damage, then jumps to damage a nearby enemy. Consonant Chains will jump to as many as 5 additional targets with damage reduced by 30% each jump. Targets hit will sugger a Movement Speed reduction. Type 1 Song.",
  icon: ""
};
