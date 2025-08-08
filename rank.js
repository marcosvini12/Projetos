// Instalar antes de rodar:
// npm install prompt-sync

const prompt = require("prompt-sync")();

let win = parseInt(prompt("Vitórias: "));
let lose = parseInt(prompt("Derrotas: "));

function rank(win, lose) {
    let result = win - lose;
    let out;

    if (result < 10) {
        out = "Ferro";
    } else if (result < 20) {
        out = "Bronze";
    } else if (result < 50) {
        out = "Prata";
    } else if (result < 80) {
        out = "Ouro";
    } else if (result < 90) {
        out = "Diamante";
    } else if (result < 100) {
        out = "Lendário";
    } else {
        out = "Imortal";
    }

    return { result, out };
}

let { result, out } = rank(win, lose);
console.log(`O Herói tem saldo de **${result}** e está no nível de **${out}**`);
