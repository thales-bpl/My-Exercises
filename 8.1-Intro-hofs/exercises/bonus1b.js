let mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

let warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

let dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Mecânicas:
const damageRoll = (min, max, character) => {
  let damage = Math.floor(Math.random() * (max - min)) + min;
  return `The ${character} dealt ${damage} damage!`;
}

// Ações/Ataques
const breathOfFire = (character) => {
  const specs = {
    min: 15,
    max: character.strength
  }
  return specs;
}

const fireBall = (character) => {
  const specs = {
    min: character.intelligence,
    max: character.intelligence * 2,
    manacost: 15
  }
  return specs;
}

const axeChop = (character) => {
  const specs = {
    min: character.strength,
    max: character.strength * character.weaponDmg
  }
  return specs;
}

// Turns:
// Dragon turn:
console.log(damageRoll(breathOfFire(dragon).min, breathOfFire(dragon).max, 'Dragon'))

// Warrior turn:
console.log(damageRoll(axeChop(warrior).min, axeChop(warrior).max, 'Warrior'))

// Mage turn:
const spellDamage = (character, spell) => {
  if (character.mana > spell.manacost) {
    return (damageRoll(spell.min, spell.max, 'Mage'));
  } else {
    return 'Não possui mana suficiente';
  }
}

const manaUsage = (character, spell) => {
  if (character.mana > spell.manacost) {
    character.mana -= spell.manacost;
  }
  return character.mana
}

const mageTurn = (action, mana) => {
  const log = {
    Dano: action,
    Mana: mana
  }
  return log;
}

console.log(mageTurn(spellDamage(mage, fireBall(mage)), manaUsage(mage, fireBall(mage))))
