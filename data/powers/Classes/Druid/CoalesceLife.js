exports.power = {
  name: "Coalesce Life",
  sources: [
    { type: "class", id: "druid" }
  ],
  type: "Non-Agressive",
  cast_type: "Instant",
  duration: 0,
  cooldown: 0,
  targeting: "Area",
  max_targets: 1,
  range: "",
  next_chain: ["Coalesce Life 2"],
  cost: {
    pips: 0,
    resource: 46
  },
  tooltip: "Manifest an Orb at your targeted location that allies or you may use to heal 97 to 119 + 108% Weapon Damage.",
  icon: ""
};
