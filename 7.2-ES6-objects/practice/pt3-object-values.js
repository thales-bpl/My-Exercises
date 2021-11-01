const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const studentSkills = (student) => {
  const skills = Object.keys(student);
  const ranks = Object.values(student);
  for (index in skills) {
    console.log(`${skills[index]}, nível: ${ranks[index]}`)
  }
}
console.log(studentSkills(student));

function studentProfile(student) {
  const skill = Object.keys(student);
  const rank = Object.values(student);
  for (let index = 0; index < skill.length; index += 1) {
    console.log(`${skill[index]}, Nível: ${rank[index]}`);
  }
}
console.log(studentProfile(student));

// L11: se usar 'for (index of student)', minha função retorna 'undefined, nível: undefined'. Somente com 'for (index in skills)' a função retorna os valores corretos. No entanto, o gabarito usa 'for(skill in student)' sem problemas.
// Edit: Acho que entendi: index do for(index in student) é a própria key.
// L15: A última string retornada da função, depois dos valores corretos, é 'undefined'. Pq?
    /* Html, nível: Muito Bom
    Css, nível: Bom
    JavaScript, nível: Ótimo
    SoftSkill, nível: Ótimo
    undefined */

//Gabarito: 
// Sem Object.values
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

for(skill in student) {
  console.log(skill);
}

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }
  return skills;
};
console.log(listSkillsValuesWithFor(student));

// Com Object.values
const listSkillsValuesWithValues = (student) => Object.values(student);
console.log(listSkillsValuesWithValues(student));
