/////////////////////////////////////////////// 1. FUNÇÕES (CONCEITOS GERAIS)
/*Antes para pedir o nome de alguém no prompt, por exemplo, tinhamos que fazer duas variáveis.
EXEMPLO:
var nome1 = prompt("inserir nome")
alert("O nome inserido é " + nome1)

var nome2 = prompt("inserir nome")
alert("O nome inserido é " + nome2)

Agora usamos function pra otimizar linhas:
EXEMPLO:

function functionname () {
    var name = prompt("inserir nome")
    alert("O nome inserido é " + name)
}

functionname ();
functionname ();*/


/*ATIVIDADE Para praticar 1
function CalculoNumero () {
    var numero = prompt("insira um número abaixo")
    if (numero %2 === 0) {
        alert("o seu número é par")
    } else {
        alert("seu número é impar")
    }
}
CalculoNumero()
CalculoNumero()
CalculoNumero()*/


/////////////////////////////////////////////////////////// 2. ARGUMENTOS E PARâMETROS
/*
EXEMPLO 1:
function uniaoPalavras (palavra1, palavra2) {
    console.log(palavra1 + " " + palavra2)
}
uniaoPalavras("cursando", "JS")
uniaoPalavras (prompt("nome"), prompt("sobrenome"))


EXEMPLO 2:
function somaNumeros (numero1, numero2) {
    var valorconvertido1 = parseFloat(numero1)
    var valorconvertido2 = parseFloat(numero2)
    var resultado = valorconvertido1 + valorconvertido2
    alert("esse é o resultado: " + resultado)
}
somaNumeros (prompt("Insira o primeiro numero"), prompt("insira o segundo número"))*/


///////////////////////////////////////////////////////////3.RESULTADO DE UMA FUNÇÃO

/*function somar(primeironumero, segundonumero) {
    return primeironumero + segundonumero
}
var resultado = somar(5, 8)
var resultado = somar(10, 4)
console.log("Resultado " + resultado)*/

/*
function calculadora(primeironumero, segundonumero, operação) {
    primeironumero = parseFloat(primeironumero);
    segundonumero = parseFloat(segundonumero);

    if(operação == "*") {
        return primeironumero * segundonumero
    }
    else if (operação == "+") {
        return primeironumero + segundonumero
    }
    else if (operação == "-") {
        return primeironumero - segundonumero
    }
    else if (operação == "/") {
        return primeironumero / segundonumero
    }
    else {
        return 0
    }
}
console.log(calculadora (10, 5, "-"))

var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var oper = prompt("Digite a operação (+, -, *, /):");

console.log(calculadora(num1, num2, oper));
*/


///////////////////////////////////////////////////////////4. FUNÇÃO ANONIMA E ARROW FUNCTION
var soma = (a, b) => {return a + b} //a seta substituiu a palavra function
console.log(soma(15, 20))
