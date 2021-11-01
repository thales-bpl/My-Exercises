const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Ex1:
const newClass = (object, newKey, value) => {
  object[newKey] = value;
}
newClass(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Ex2:
const objectKey = (object) => {
  return Object.keys(object);
}
console.log(objectKey(lesson3));

// Ex3:
const objectLength = (object) => {
  return Object.keys(object).length;
}
console.log(objectLength(lesson1));

// Ex 4:
const objectValues = (object) => {
  return Object.values(object);
}
console.log(objectValues(lesson2));

// Ex 5:
const allLessons = {lesson1, lesson2, lesson3};
console.log(allLessons);

// resposta alternativa:
const allLessons = (obj1, obj2, obj3) => Object.assign({}, {obj1, obj2, obj3});
console.log(allLessons(lesson1, lesson2, lesson3));

// Ex 6:
const studentCount = (obj) => {
  let total = 0;
  const arrayKeys = Object.keys(obj);
  for (index in arrayKeys) {
    total += obj[arrayKeys[index]].numeroEstudantes;
  }
  return total;
}
console.log(studentCount(allLessons));

// Ex 7:
const getValueByNumber = (obj, index) => {
  const arrayObj = Object.keys(obj);
  const target = arrayObj[index];
  return obj[target];
}
console.log(getValueByNumber(lesson1, 0));

// Ex 8:
const verifyPair = (obj, key, value) => {
  const objKey = obj[key];
  const verify = (objKey == value) ? `true` : `false`;
  return verify;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
