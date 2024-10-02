// Declaração de variáveis no escopo global
let vitorias
let derrotas 
let nivel
let saldoVitorias

// Função main, quando chamada recebe como parâmetro as vitórias e derrotas de um jogador e calcula o saldo de vitorias
function main(vitorias, derrotas){
    saldoVitorias = vitorias - derrotas
    // A função main após o calculo, chama a função a qual classifica o seu rank passando como parâmetro o saldo de Vitorias
    rank(saldoVitorias)
}

function rank(saldoVitorias){
    // Após a função ser chamada, ela irá verificar o rank do jagador através do parâmetro recebido e pela estrutura de decisão 
    if (saldoVitorias <= 10){
        nivel = "Ferro"
        // quando entrar em um dos if, será atribuido o rank na variável nivel
    } else if ((saldoVitorias >= 11) && (saldoVitorias <= 20)){
        nivel = "Bronze"
        } else if ((saldoVitorias >= 21) && (saldoVitorias <= 50)){
            nivel = "Prata"
            } else if ((saldoVitorias >= 51) && (saldoVitorias <= 80)){
                nivel = "Ouro"
                } else if ((saldoVitorias >= 81) && (saldoVitorias <= 90)){
                    nivel = "Diamante"
                    } else if((saldoVitorias >= 91) && (saldoVitorias <= 100)){
                        nivel = "Lendário"
                        } else if (saldoVitorias >= 101){
                            nivel = "Imortal"
                            }
    // retornará o rank após classificado pela estrutura de decisão
    return(nivel)
}

// chamando a função main e passando os seus parâmetros
main(150, 30)

console.log(`O herói tem saldo de ${saldoVitorias}, está no nível de ${nivel}`)