

function pegarRankPorSaldoVitorias(saldoVitorias) {

    if (saldoVitorias <= 10) {
        return "Ferro";
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        return "Bronze";
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        return "Prata";
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        return "Ouro";
    }
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        return "Diamante";
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        return "Lendário";
    }
    else if (saldoVitorias >= 101) {
        return "Imortal"
    }

}
function saldoRankeadas(quantidadeVitorias, quantidadeDerrotas) {
    const saldoVitorias = quantidadeVitorias - quantidadeDerrotas;
    const nivelHeroi = pegarRankPorSaldoVitorias(saldoVitorias)
    console.log(`O Herói está com saldo de ${saldoVitorias} e no nível ${nivelHeroi}`)
}
let quantidadeVitorias = 70;
let quantidadeDerrotas = 30;

 saldoRankeadas(quantidadeVitorias,quantidadeDerrotas)


