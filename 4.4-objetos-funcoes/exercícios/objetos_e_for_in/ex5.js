let info = {
    personagem: ['Margarida', 'Tio Patinhas'],
    origem: ['Pato Donald', "Christmas on Bear Mountain, Dell's Four Color Comics #178"],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', "O último MacPatinhas"],
    recorrente: ["Sim", "Sim"],
};

for (let key in info) {
    let listKey = '';
    for (index = 0; index < info[key].length; index += 1) {
        listKey += (info[key][index]);
        if (index < (info[key].length - 1)) {    
            listKey += ' e ';
        } else {
            listKey += '.';
        }
        if (info[key][0] === info[key][1]) {
            listKey = "Ambos recorrentes.";
        }
    }
    console.log(listKey);
}
