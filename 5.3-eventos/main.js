const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

function resetText(event) {
  event.target.innerText = 'Opção reiniciada';
}

firstDiv.addEventListener('dblclick', resetText);
