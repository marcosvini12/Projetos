const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual é o nome do herói? ", function(nomeHeroi) {
  rl.question("Qual é a quantidade de XP do herói? ", function(xp) {
    let xpHeroi = parseInt(xp);
    let nivelHeroi;

    if (xpHeroi < 1000) {
      nivelHeroi = "Ferro";
    } else if (xpHeroi <= 2000) {
      nivelHeroi = "Bronze";
    } else if (xpHeroi <= 5000) {
      nivelHeroi = "Prata";
    } else if (xpHeroi <= 7000) {
      nivelHeroi = "Ouro";
    } else if (xpHeroi <= 8000) {
      nivelHeroi = "Platina";
    } else if (xpHeroi <= 9000) {
      nivelHeroi = "Ascendente";
    } else if (xpHeroi <= 10000) {
      nivelHeroi = "Imortal";
    } else {
      nivelHeroi = "Radiante";
    }

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
    rl.close();
  });
});
