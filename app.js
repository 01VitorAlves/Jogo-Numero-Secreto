 let titulo = document.querySelector('h1');
 titulo.innerHTML = "Jogo do número secretso";
// //aqui estou criando uma variavel selecionando um h1 do html
// // primeiro crio, atribuindo que será destinada ao h1, em seguida falo q o titulo no html será X

 let paragrafo = document.querySelector('p');
 paragrafo.innerHTML = "Escolha um número entre 1 e 10";

//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------


textoInicial();


let listaNumeros = [];
let numeroMaximo = 10;
let numeroSecreto = 4;
let tentativas = 1;


function verificarChute() {
    let chute = document.querySelector("input").value  //estou indo no HTML(document.querySelector) na parte de input e pgando o valor(.value)
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', "Você acertou!");


        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = (`Parabens descobrindo o numero secreto com ${tentativas} ${palavraTentativa}!`);

        exibirTextoNaTela('p', mensagemTentativas);


        document.getElementById("reiniciar").removeAttribute('disabled');
        //depois de acertar, estou indo no html(document) indo no ID reiniciar (getElement) 
        //e removendo o atributo disabled para o botão funcionar

        } 
        
        else { 

            if(chute > numeroSecreto){
            
            exibirTextoNaTela('h1', "Você errou :(");
            exibirTextoNaTela('p', "Tente um número menor...");

            }
        

            else{
                exibirTextoNaTela('h1', "Você errou :(");
                exibirTextoNaTela('p', "Tente um número maior...");
            }

            tentativas++;

            limparCampo()
        }

}

//se vc for no HTML, foi criado um botão e atribuido essa função a ele: verificarChute()
//<button onclick="verificarChute()"
//Aqui estamos atribuindo uma função de fato para oq foi criado no HTML

//----------------------------------------------------------------------------

//versão simplificada do codigo abordando H1 e Paragrafo usando uma função:

function exibirTextoNaTela(tag, texto ) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

//----------------------------------------------------------------------------


function textoInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', "Escolha um número entre 1 e 10");
}


//----------------------------------------------------------------------------


function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1); //como uso esse numero em uma variavel, peço o return, ele não só calcula, mas me devolve algo
    
    let elementosNaLista = listaNumeros.length;
    if(elementosNaLista == numeroMaximo) {
        listaNumeros = [];
    }


    if (listaNumeros.includes(numeroEscolhido)) {  //se dentro da lista já incluir o numero, escolha outro
        return gerarNumero();
    } 
    else{
        listaNumeros.push(numeroEscolhido);
        console.log(listaNumeros);
        return numeroEscolhido;
    }
}


//----------------------------------------------------------------------------

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';   //seleciono no html o campo input e falo o value do chute será vazio (limpar a tela)
}

//----------------------------------------------------------------------------

function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}