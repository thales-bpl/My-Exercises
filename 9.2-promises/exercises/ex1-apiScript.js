// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const jokeContainer = document.querySelector('#jokeContainer');
console.log(jokeContainer);

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  return fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
};


const printJoke = async () => {
  const joke = await fetchJoke()
    .then((joke) => jokeContainer.innerHTML = joke)
}


window.onload = () => printJoke();