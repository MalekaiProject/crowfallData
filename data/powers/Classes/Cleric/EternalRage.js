exports.power = {
  name: "Eternal Rage",
  sources: [
    { type: "class", id: "cleric" }
  ],
  type: "Buff",
  cast_type: "Instant",
  duration: 5,
  cooldown: 23,
  targeting: "Group",
  max_targets: 5,
  range: 2,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 29
  },
  tooltip: "Instantly generates 35 Rage while allies recover their native resource over time. Allies and you also heal for 158 - 193 + 175% Weapon Damage 2 times over 5 seconds.",
  icon: ""
};
