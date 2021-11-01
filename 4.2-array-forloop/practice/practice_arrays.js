/* ARRAYS  */
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');
tasksList.unshift('cochilar mais um pouco');
tasksList.pop();
tasksList.shift();
console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// Ex 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Ex 2
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio');
console.log(indexOfPortfolio);

// Ex 3
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato')
console.log(menu3);