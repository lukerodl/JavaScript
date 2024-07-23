///////////////////////////////////1. ESCOPO GLOBAL E LOCAL

/*
var desconto

function calcularDesconto (preço) {
    var desconto = preço * 0.3
    console.log(desconto) //Esse console log vai mostrar o desconto com base no escopo do bloco, ou seja, o preco * 0.3
}
console.log(desconto) //Esse console log vai mostrar o desconto com base no escopo global, porque ele está fora de um escopo, ou seja, undefinded (porque não determinamos nenhum desconto a nossa var lá em cima)
*/


///////////////////////////////////1. VARIÁVEIS GLOBAIS E LOCAIS

/*function soma (num1, num2){
    var resultado = num1 + num2
    return resultado
}

function subtracao (num1, num2){
    var resultado = num1 - num2
    return resultado
}

console.log(soma(2,3))
console.log(subtracao(2,3)) */


// ATIVIDADE PARA PRATICAR

// Função para calcular o preço total com base no preço unitário e na quantidade
function calcularPrecoTotal(precoUnitario, quantidade) {
    let resultado = precoUnitario * quantidade;  // Calcula o preço total sem desconto

    if (resultado > 100) {
        let totalDesconto = resultado * 0.10;  // Calcula o desconto de 10%
        return resultado - totalDesconto;  // Retorna o preço com desconto aplicado
    } else {
        return resultado;  // Retorna o preço total sem desconto
    }
}

// Solicita ao usuário para digitar o preço unitário e a quantidade
let precoUnitario = parseFloat(prompt("Digite o preço unitário")); 
let quantidade = parseFloat(prompt("Digite a quantidade"));

// Chama a função com os valores fornecidos pelo usuário e exibe o resultado
console.log(calcularPrecoTotal(precoUnitario, quantidade));
