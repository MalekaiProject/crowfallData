exports.power = {
  name: "Essence Scram",
  sources: [
		{ type: "class", id: "druid" }
	],
  type: "Ultimate",
  cast_type: "Channeled",
  duration: 7,
  cooldown: 180,
  targeting: "Self",
  max_targets: 1,
  range: 5,
  next_chain: [],
  cost: {
    pips: 0,
    resource: 26
  },
  tooltip: "Become invulnerable while you channel. While in the Life tray you lose 5% Essence and inflict 40 to 60 every 0.25 seconds.  While in the Death tray heal 1500 Health every .025 seconds while pushing enemies away every 1 second, and if you successfully channel the max duration gain the Power of Death which grants 30% Bonuse Damage for 30 seconds.",
  icon: ""
};
