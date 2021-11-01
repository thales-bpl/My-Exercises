const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function studentProfile(student) {
  let skill = Object.keys(student);
  for (let index = 0; index < skill.length; index += 1) {
    console.log(`${skill[index]}, Nível: ${student[skill[index]]}`);
  }
}

console.log('Estudante 1:');
studentProfile(student1);

console.log('Estudante 2: ');
studentProfile(student2);

// objeto.length retorna undef
//
// Gabarito: 
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};
console.log('Estudante 1');
listSkills(student1); 

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);