const register = (fullName) => {
  // Pedro Guerra into pedro_guerra@trybe.com
  const email = fullName.toLowerCase().replace(' ', '_')
  return (`Nome: ${fullName}, Email: ${email}@trybe.com`)
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drummond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log (newEmployees(register));

