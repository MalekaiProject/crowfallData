exports.power = {
  name: "Shield Slam",
  sources: [
    { type: "class", id: "knight" }
  ],
  type: "Melee Attack",
  cast_type: "Instant",
  duration: 0,
  cooldown: 24,
  targeting: "Reticle",
  max_targets: 3,
  range: 7.5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 30
  },
  tooltip: "Charge your shield and slam up to 3 enemies in front of you for 82 - 111 + 97% Crushing Weapon Damage based on length of he charge. Charges over 66% guarantee a critical hit and push enemies away.",
  icon: ""
};
