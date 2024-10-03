let vitorias
let derrotas 
let nivel
let saldoVitorias

function main(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    rank(saldoVitorias)
}

function rank(saldoVitorias){
    if (saldoVitorias < 0) {
        console.log("O sistema não aceita números negativos, tente novamente!")
    } else if (saldoVitorias <= 10) {
        nivel = "Ferro"
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário"
    } else if (saldoVitorias > 101) {
        nivel = "Imortal"
    } else {
        console.log("Nível não encontrado, tente novamente!")
    }
    return(nivel)
}

main(90, 80)

if (nivel) {
    console.log(`O herói tem saldo de ${saldoVitorias}, está no nível de ${nivel}`)
}