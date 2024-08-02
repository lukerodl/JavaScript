/* //EXEMPLO DE UM OBJETO
class BrinquedoPelucia {
    constructor(cor, tamanho, tipo) {
      this.cor = cor;
      this.tamanho = tamanho;
      this.tipo = tipo;
    }
  
    apertar() {
      console.log("Faz barulho!");
    }
  
    abraçar() {
      console.log("É macio!");
    }
  }
  
  // Criando um objeto do tipo BrinquedoPelucia
  let meuBrinquedo = new BrinquedoPelucia("marrom", "pequeno", "urso");
  
  // Acessando uma propriedade
  console.log(meuBrinquedo.cor);  // Saída: marrom
  
  // Usando um método
  meuBrinquedo.apertar();  // Saída: Faz barulho!
  */




/*
let xicara = {
    cor: "branco",
    forma: "redonda"
}
console.log(xicara)


console.log("##############################")

const fruta = {
    nome: "maça",
    cor: "vermelha",
    peso: 150,
    tipo: "fruta",
}
console.log(fruta)
console.log(fruta.nome) //vai aparecer apenas "maça"
console.log(fruta["nome"]) //vai aparecer apenas "maça"
fruta["cor"] = "vermelha"
console.log(fruta)  */



/*
//EXERCÍCIO PRATICO
const fruta = {
    nome: "laranja",
    cor: "amarela",
    peso: 10,
    tipo: "fruta",
}
console.log(fruta)
console.log(fruta.cor)
console.log(fruta["peso"])


fruta.cor = "vermelha"
fruta["peso"] = 20
console.log(fruta.cor)
console.log(fruta["peso"])
*/


/*
function xicara (cor, tamanho, forma) {
    this.cor = cor
    this.tamanho = tamanho
    this.forma = forma
}

const xicara1 = new xicara("branca", 10, "redonda")
const xicara2 = new xicara("preta", 200, "triangular")
console.log(xicara1)
console.log(xicara1.cor)
console.log(xicara.forma)
console.log(xicara2)

//Se eu tirar o new dalí, o programa não entende que a gente esta pegando as propriedades lá da function


//OUTRO EXEMPLO
function personagem (nome, poder, cor) {
   this.nome = nome
   this.poder = poder
   this.cor = cor
}

const personagem1 = new personagem("Huck", "Força", "Verde")
const personagem2 = new personagem("Homem Aranha", "teias", "vermelho")
console.log(personagem1)
console.log(personagem2)

//TERCEIRO EXEMPLO
function faculdades (nome, curso, local) {
    this.nome= nome
    this.curso= curso
    this.local= local
}

const faculdade1 = new faculdades("PUCPR", "Letras", "Centro") 
const faculdade2 = new faculdades("UFRJ", "Cinema", "Centro - Rio de Janeiro")
console.log(faculdade1)
console.log(faculdade2)


//QUARTO EXEMPLO
function casa (tipo, bairro, cidade) {
    this.tipo = tipo,
    this.bairro = bairro,
    this.cidade = cidade
}

const casa1 = new casa("Apartamento", "Agua Verde", "Curitiba")
const casa2 = new casa("Apartamento", "Flamengo", "Rio de Janeiro")
console.log (casa1)
console.log (casa2)



//QUINTO EXEMPLO
function fruta (tipo, cor, sabor) {
    this.tipo = tipo,
    this.cor = cor,
    this.sabor = sabor
}

let fruta1 = new fruta ("tomate", "vermelho", "ácido")
let fruta2 = new fruta ("abacate", "verde", "neutro")
console.log(fruta1)
console.log(fruta2)



//SEXTO EXEMPLO
function frutas (nome, cor, peso, tipo) {
    this.nome = nome
    this.cor = cor
    this.peso = peso
    this.tipo = tipo
}


var frutas1 = new frutas ("pessego", "verde", 10, "acido")
let frutas2 = new frutas ("uva", "roxo", 10, "doce")
console.log(frutas1)
console.log(frutas2)



//SÉTIMO EXEMPLO 

function TurmaU (professor, estudante, sexo) {
    this.professor = professor
    this.estudante = estudante
    this.sexo = sexo
}

const usuario1 = new TurmaU("Rosane", "Lucas", "Masculino")
const usuario2 = new TurmaU("Rosane", "Letícia", "Feminino")
console.log(usuario1)
console.log(usuario2)



//OITAVO EXEMPLO
function Computadores(modelo, cor, tamanho) {
    this.modelo = modelo
    this.cor = cor
    this.tamanho = tamanho
}

let computador1 = new Computadores("Dell", "Preto", "20 polegadas")
let computador2 = new Computadores("Apple", "Prata", "25 polegadas")
console.log(computador1)
console.log(computador2)



function pessoa (nome, idade, rua) {
    this.nome = nome
    this.idade = idade
    this.rua = rua
    this.falar = function () { //acrescentando mais uma propriedade que responderá uma função
        console.log("Olá, eu sou " + this.nome)
    }
}

const pessoa1 = new pessoa ("Lucas", 23, "Nelson Rieke")
const pessoa2 = new pessoa ("Bruno", 23, "Jardim avenida")

pessoa1.falar()
pessoa2.falar()



function pessoa (nome, idade, sexo) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    this.falar = function () {
        console.log("Olá, é um prazer te conhecer " + this.nome)
    }
}

const candidato1 = new pessoa("Lucas", 24, "masculino")
const candidato2 = new pessoa("Key Alves", 32, "gosto")

candidato1.falar()



function animal (tipo, cor, nome) {
    this.tipo = tipo
    this.cor = cor
    this.nome = nome
    this.show = function () {
        console.log("Eu amo o animal " + this.tipo)
    }
}

const animal1 = new animal("Leao", "preto", "bentinho")
const animal2 = new animal("Gato", "preto", "nuvem")

animal2.show()
animal1.show()



function fruta (nome, cor, tamanho) {
    this.nome = nome
    this.cor = cor
    this.tamanho = tamanho
}

const fruta1 = new fruta("laranja", "laranja", "QUARENTA centimentros")
console.log(fruta1)
console.log(fruta1.nome.length)
console.log(fruta1.cor.toUpperCase())
console.log(fruta1.tamanho.toLowerCase())


const pessoa = {
    nome: "Lucas",
    idade: 23,
    sexo: "Masculino",
}

console.log("nome" in pessoa) //vai retornar true, porque tem a chave "nome" no escopo "pessoa"
console.log("origem" in pessoa) //vai retornar falso, porque não existe a chave "origem" no escopo pessoa.



const pessoa = {
    nome: "Lucas",
    idade: 23,
    Sexo: "Masculino"
}

for (const propriedade in pessoa) {
    console.log(pessoa[propriedade])
}


const pessoa = {
    nome: "Lucas",
    idade: 23,
    sexualidade: "homossexual"
}

for (const propriedade in pessoa) {
    console.log(pessoa[propriedade])
}

const fruta = {
    nome: "Maça",
    cor: "vermelha",
    formato: "oval"
}

for (const listadeFrutas in fruta) {
    console.log(fruta[listadeFrutas])
}



function fruta(nome, cor, formato){
    this.nome = nome,
    this.cor = cor,
    this.formato = formato
}

let fruta1 = new fruta("laranja", "amarela", "arredondada")
for (const propiedadesfrutas in fruta1) {
    //console.log(fruta1[propiedadesfrutas])
    console.log(propiedadesfrutas + " = " + fruta1[propiedadesfrutas])
}




class Produto {
    constructor(nome, preco) { //dentro dessa chaves estará as propriedades
        this.nome = nome.toUpperCase()
        this.preco = preco
        this.vendido = false
    }
 somarICMS () { //dentro dessa chaves estará os métodos
    this.preco = this.preco * 1.21
 }

  vender() { //dentro dessa chaves estará os métodos
    this.vendido = true
  }
}


const produto1 = new Produto("arroz", 5)
const produto2 = new Produto("feijão", 20)

produto1.somarICMS();
produto2.somarICMS()
produto1.vender()
console.log(produto1)
console.log(produto2)




class alimento {
    constructor (nome, cor, peso, tipo){
        this.nome = nome.toUpperCase(),
        this.cor = cor,
        this.peso = peso,
        this.tipo = tipo
    }
    descrever() {
        return `O alimento ${this.nome} é de cor ${this.cor}, pesa ${this.peso} e é do tipo ${this.tipo}.`;
    }

}
const fruta = new alimento("maçã", "vermelha", "10g", "fruta")
const verdura = new alimento("batata", "verde", "20g", "verdura")

console.log(fruta.descrever())
console.log(verdura.descrever())



class Alimentos {
    constructor (nome, cor, peso, tipo) {
        this.nome = nome,
        this.cor = cor,
        this.peso = peso,
        this.tipo = tipo
    }
    
    description () {
        return "O Alimento " + this.nome + " de cor " + this.cor + " com o peso " + this.peso + " e do tipo " + this.tipo + " foi inserida no carrinho de compras"

    }
}

const alimento1 = new Alimentos("Macarrão", "preto", "5kg", "massa")
console.log(alimento1.description())
*/


