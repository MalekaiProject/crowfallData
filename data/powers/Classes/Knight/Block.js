exports.power = {
  name: "Block",
  sources: [
		{ type: "class", id: "knight" }
	],
  type: "Crowd Control Self",
  cast_type: "Hold Channeled",
  duration: 5,
  cooldown: 0,
  targeting: "Self",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 0
  },
  tooltip: "Raise your shield Blocking attacks, reducing damage and preventing crowd control effects.  Enemies striking you with Elemental attacks take 100% Weapon Damage in return. Increases damage by 15% for 5 seconds for each 150 damage taken while Blocking.  Taking more that 150 damage while Blocking activates SHIELD BASH and increases damage by 15% for 5 second for each 150 damage taken while Blocking.",
  icon: ""
};
