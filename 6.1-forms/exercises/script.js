const boxStates = document.querySelector('#input-state') // elemento <select> que recebe options dos estados

const estados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espirito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MS: 'Mato Grosso do Sul',
  MT: 'Mato Grosso',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

for (let index in estados) {
  let stateOption = document.createElement('option')
  stateOption.innerText = estados[index];
  stateOption.value = index;
  boxStates.appendChild(stateOption);
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', generateForm)

// jogar todas as infos do forms numa div:
function generateForm(evento) {
  evento.preventDefault();
  formsContainer();
  extractValues();
}

// 
function formsContainer() {
  let divForms = document.createElement('div');
  divForms.classList.add('container');
  document.body.appendChild(divForms);
}

// função pra pegar todos os elementos do forms:
function extractValues() {
let allInputs = document.getElementsByClassName('input'); // todos os elementos <input>
  for (let key of allInputs) {
    let entry = key.value;
    divForms.innerHTML = entry;
    divForms.innerText = '<br>'
  }
}
