
// let titulo = document.querySelector ("h1");
// titulo.innerHTML = "Jogo do numero Secreto"

// let paragrafo = document.querySelector ("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 10";
let  listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1


function exibirTextoNaTela (tag, texto) {
let paragrafo = document.querySelector (tag);
paragrafo.innerHTML = texto;
responsiveVoice.speak (texto, "Brazilian Portuguese Female", {rate:1.2})

}

mensagemIncial()

function mensagemIncial() {
    exibirTextoNaTela("h1", "Jogo do numero Secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}



function verificarChute() {

    let chute = document.querySelector("input").value

    if (numeroSecreto==chute) {
        
        exibirTextoNaTela("h1","ACERTOU");
        palavraTentativa = tentativas > 1 ? "tentativas":"Tentativa"
        exibirTextoNaTela("P",`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else{
        if (chute > numeroSecreto) {
           exibirTextoNaTela('p', "O numero é menor")
    } else {
        exibirTextoNaTela ('p',"O numero é maior")
    } tentativas++
    limpacampo()
    }


    // console.log(numeroSecreto == chute)
    // console.log(numeroSecreto)
    //console.log(msg())
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1)
    let quantDeElementosNaLista = listaDeNumerosSorteados.length
if (quantDeElementosNaLista == numeroLimite){

    listaDeNumerosSorteados= []
}

   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(`numeros na lista ${listaDeNumerosSorteados}`)
    return numeroEscolhido
   }
}

function limpacampo(){
    chute = document.querySelector('input');
    chute.value = " "
}

function  reiniciarjogo() {
    mensagemIncial()
    tentativas = 1
    limpacampo()
    numeroSecreto = gerarNumeroAleatorio()
    document.getElementById("reiniciar").setAttribute('disabled',true)

}




//-----------------------------------EXERCICIOS--------------------------------------------------


// //Criar uma função que exibe "Olá, mundo!" no console.
// msg()

// function msg () {
  
//     console.log("Ola mundo")
// }

// //Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// msgs("jose")
// function msgs(nome) {
    
//     console.log( `Ola, ${nome}`)
// }

// //Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// console.log(`exibir dobro do numero informado ${dobrar(6)}`)
// function dobrar(numero) {
//     return numero*2
// }

// //Criar uma função que recebe três números como parâmetros e retorna a média deles.
// console.log(`exibir media dos numeros informados ${media(6,8,7)}`)
// function media(valor1,valor2,valor3) {
//     return (valor1 + valor2 + valor3)/3
// }   

// //Criar uma função que recebe dois números como parâmetros e retorna o maior deles.console.log(`exibir media dos numeros informados ${media(6,8,7)}`)
// console.log(`exibir Maior dos numeros informados ${maior(6,9,7)}`)
// function maior(valor1,valor2,valor3) {
//     return Math.max (valor1, valor2, valor3)
// }   

// //Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmoconsole.log(`exibir dobro do numero informado ${dobrar(6)}`)
// console.log(`exibir dobro do numero informado ${ multiplicao(6)}`)
// function multiplicao(numero) {
//     return numero*numero
// }