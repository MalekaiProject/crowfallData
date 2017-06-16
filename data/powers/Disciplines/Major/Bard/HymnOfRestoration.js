exports.power = {
  name: "Hymn of Restoration",
  sources: [
    { type: "discipline", sub_type: "major", id: "bard" }
  ],
  type: "Buff",
  cast_type: "Toggle",
  duration: 12,
  cooldown: 1,
  targeting: "Group",
  max_targets: 5,
  range: 0,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Increases your groups In Combat Health Regen by 60 as well as Out of Combat Health Regen by 80 for 12 seconds. Type 3 Song.",
  icon: ""
};
