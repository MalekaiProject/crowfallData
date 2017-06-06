exports.power = {
  name: "Hellfire Shield",
  source: "Confessor",
  type: "Buff",
  cast_type: "Instant",
  duration: 15,
  cooldown: 9,
  targeting: "Self",
  max_targets: 1,
  range: 25,
  next_chain: ["Hellfire Aura", "Fire Wave"],
  cost: {
    pips: 0,
    resource: 55
  },
  tooltip: "Surrounds your skin an a Hellfire Shield to 15 seconds damaging all who cause damage to your for 15 - 18 damage.",
  icon: ""
};
