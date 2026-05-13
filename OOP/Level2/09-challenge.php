<?php

// Respect :
// - OOP principles, SOLID, DRY
// - protected & public only if needed
// - getters/setters with control access logic
// - construct with type hinting for all the classes
// - toString method for all the classes
// 
// 1. Make an interface Attackable with a method takeDamage(int $amount)
// 2. Make an abstract class Character implementing Attackable with properties: name, health, baseAttackPower
// 3. Make Warrior, Mage, and Rogue classes extending Character
// 4. Warrior has an int property 'armor'
// 5. Mage has an int property 'bonusMagicDamage'
// 6. Rogue has an int property 'dodgeChance' (percentage 0-100)
// 7. Character setter for health must prevent it from dropping below 0 (if negative, set it to 0)
// 8. Implement takeDamage() in Warrior so that the actual damage taken is ($amount - armor), with a minimum of 0 damage taken
// 9. Make a BattleArena class that holds multiple Character instances
// 10. BattleArena has an addCharacter(Character $character) method
// 11. BattleArena has a getAliveCharactersCount() method returning the number of characters with health > 0
