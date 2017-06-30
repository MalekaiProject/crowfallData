exports.power = {
  name: 'Holy Warrior',
  sources: [
    { type: 'class', id: 'templar' }
  ],
  type: 'Transformation',
  cast_type: 'Instant',
  duration: 30,
  cooldown: 45,
  targeting: 'Self',
  max_targets: 1,
  range: '',
  next_chain: [],
  previous_chain: [],
  cost: {
    pips: 0,
    resource: 1000
  },
  tooltip: 'Simmer with Radiance temporarily increasing your maximum Health. All damage inflicted is considered Holy and cannot be mitigated with armor. Zealotry is earned by participating in combat and striking with Righteous Parry.',
  icon: 'https://cdn.malekai.network/images/powers/holy-warrior.png'
};
