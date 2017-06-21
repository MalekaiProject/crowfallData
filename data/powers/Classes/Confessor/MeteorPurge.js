exports.power = {
  name: "Meteor Purge",
  sources: [
    { type: "class", id: "confessor" }
  ],
  type: "Ranged Attack",
  cast_type: "Charged",
  duration: 30,
  cooldown: 45,
  targeting: "Reticle",
  max_targets: 5,
  range: 5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 145
  },
  tooltip: "Creates a Meteor which damages all enemies in 5m for 101 - 151 + 126% Weapon Damage when it explodes. Charges over 66% apply Black Mantle to all targets hit, which absorbs all incoming Healing until 5000 points of Health are healed of it expires after 30 seconds.",
  icon: ""
};
