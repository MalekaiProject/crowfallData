exports.power = {
  name: "Retribution Slash",
  sources: [
    { type: "discipline", sub_type: "major", id: "blade-master" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 45,
  targeting: "Cone",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 16
  },
  tooltip: "Turn the tables on enemies with a strike granting 20% Retribution for 15 seconds and causing 113 - 153 + 133% Weapon Damage.",
  icon: ""
};
