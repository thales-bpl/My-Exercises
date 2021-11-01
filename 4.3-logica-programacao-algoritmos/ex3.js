let n = 5;
let asterisco = '';
let vazio = '';

for (let index = 1; index <= n; index += 1) {
    asterisco += '*';
    for (let index2 = n - index; index2 > 0; index2 -= 1) {
        vazio += ' ';
    } 
    console.log(vazio + asterisco);
    vazio = '';
}
