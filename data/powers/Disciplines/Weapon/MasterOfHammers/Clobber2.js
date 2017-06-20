exports.power = {
  name: "Clobber 2",
  sources: [
    { type: "discipline", sub_type: "weapon", id: "master-of-hammers" }
  ],
  type: "Crowd Control",
  cast_type: "Instant",
  duration: 0,
  cooldown: 24,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  previous_chain: ['clobber'],
  cost: {
    pips: 0,
    resource: 10
  },
  tooltip: "Bash an enemy Dazing them and inflicting 76 - 103 + 90% Weapon Damage.",
  icon: ""
};
