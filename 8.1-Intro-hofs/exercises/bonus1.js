const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageRoll = (min, max, character) => {
  let damage = Math.floor(Math.random() * (max - min)) + min;
  return `The ${character} dealt ${damage} damage!`;
}

const mageTurn = (damage, mana) => {
  const mage = {
    Dano: damage,
    Mana: mana,
  }
  return mage;
}

const manaCalculator = (characterObj) => {
  if (characterObj.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    return characterObj.mana -= 15;
  }
}
let mageDamage = damageRoll(mage.intelligence, mage.intelligence * 2, 'mage')

let spell = mageTurn(damageRoll(mage.intelligence, mage.intelligence * 2, 'mage'), manaCalculator(mage));
console.log(spell);

console.log(damageRoll(15, dragon.strength, 'dragon'))
console.log(damageRoll(warrior.strength, warrior.strength * warrior.weaponDmg, 'warrior'))
