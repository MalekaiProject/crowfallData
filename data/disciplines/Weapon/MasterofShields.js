exports.discipline = {
  name: 'Master of Shields',
  type: 'Weapon',
  description: 'The mighty shield is a versatile form of weaponry that can act as a protector and an antagonizer.  Made of the sturdiest of wood or metals in different sizes and shapes, the shield acts as a protector, a reflector of damage and light, and also deflecting big hits with little cost to stamina.  When paired with another weapon the combination is an unstoppable force on the battlefield.',
  icon: 'IMAGE_ENDPOINT/disciplines/master-of-shields.png',
  classes: ['cleric', 'druid', 'knight'],
  stats_granted: ['Damage Bonus: Crushing'],
  stats_values: [6],
  equips_granted: ['Small Bucklers'],
  slots_granted: ['Off-hand Weapon Slot'],
  slots_removed: [],
  trays_granted: '',
  trays_removed: '',
  powers: ['shield-glare', 'basic-block', 'numbness']
};
