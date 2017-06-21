exports.power = {
  name: "Mighty Shield Slam",
  sources: [
    { type: "discipline", sub_type: "major", id: "shield-fighter" }
  ],
  type: "Debuff",
  cast_type: "Charged",
  duration: 0,
  cooldown: 24,
  targeting: "Cone",
  max_targets: 3,
  range: 7.5,
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 22
  },
  tooltip: "Deliver a shield attack using all your might to consume all Stamina and scale damage with stamina spent.  MIGHTY SHIELD SLAM inflicts 32 Damage Bonus per Stamina spent + 97% Crushing Weapon Damage to multiple enemies, pushing them back.  While charging the attack you are considered Blocking.  The attack is guaranteed to crit when more than 2/3rds charged.",
  icon: ""
};
