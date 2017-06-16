exports.power = {
  name: "Divine Light",
  sources: [
		{ type: "class", id: "templar" }
	],
  type: "Debuff",
  cast_type: "Instant",
  duration: 12,
  cooldown: 23,
  targeting: "Area",
  max_targets: 5,
  range: "",
  next_chain: [],
  cost: {
    pips: 0,
    resource: 1
  },
  tooltip: "Declare hallowed ground draining your of Righteousness to purify the area while also earning Righteousness for each enemy standing within the field every four seconds. Enemies within the field periodically suffer 168 - 252 + 210% Fire Weapon Damage.  Allies and your are healed for 168 - 252 + 210% Weapon Damage while you have Righteousness remaining.",
  icon: ""
};
