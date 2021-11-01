let mainParagraph = document.getElementById('paragrafo')
rewriteParagraph(mainParagraph, 'Existence is beautiful, if you let it be. Life is not a question. There does not need to be an answer.');
function rewriteParagraph(targetParagraph, text) {
    targetParagraph.innerText = text
}

let sideSquare = document.getElementsByClassName('main-content')[0];
greenSquare(sideSquare)
function greenSquare (square) {
    square.style.backgroundColor = 'rgb(76,164,109)';
}

let centralSquare = document.getElementsByClassName('center-content')[0];
whitefy(centralSquare);
function whitefy (target) {
    target.style.backgroundColor = 'white';
}

let title = document.getElementsByTagName('h1')[0]
writeTitle(title, 'Exercício 5.1 - JavaScript');
function writeTitle (target, text) {
    target.innerText = text
}

upperCasefy(mainParagraph)
function upperCasefy (target) {
    target.style.textTransform = 'uppercase';
}

const parag = document.getElementsByTagName('p')
for (let index = 0; index < parag.length; index += 1) {
    console.log(document.getElementsByTagName('p')[index].innerText);
}

for (let index in parag.length) {
    console.log(document.getElementsByTagName('p')[index].innerText);
}
