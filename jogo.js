
var altura = 0;
var largura = 0;



function ajustaPalco(){
    
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura,altura);
}
ajustaPalco();

function posRandomica(){    /* chama essa funcao em uma nova tag <script> no final do body, e comenta o src que chama a Imagem , para que seja chamada pelo java script e nao pela a class do HTML . */

    var posx = Math.floor(Math.random()*largura)-90;       /* acrecenta -90px para a imgagem nao sair da tela */
    var posy = Math.floor(Math.random()*altura)-90;        /* acrecenta -90px para a imgagem nao sair da tela */

    posx =  posx < 0?0:posx;    /* se a posicao x for menor que 0 , ? atribua o valor 0 em posx */
    posy =  posy < 0?0:posy;    /* se a posicao y for menor < que 0 , ? atribua o valor 0 em posy */

    console.log(posx,posy);

    var mosquito = document.createElement("img");    /* crie uma imagem no documento tipo img e salva na var mosquito */
    mosquito.src='img/mosquito.png';                 /* precisa indicar qual seria a imagem para mostrar no corpo do documento. */
    document.body.appendChild(mosquito);             /* crie no body(corpo do documento) um filho(mosquito) que seria a Imagem . */
    

    
    mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio();   /* cria uma class usando o javascript. */ /*  *********na 3º parte, altera o mosq01 para tamanhoMosquito(), para que chame o mosq 01 02 03. */
     /* *******  4º  Se concatenar  tamanhoMosquito() + ladoAleatorio()   fica   mosq01ladoA, nao existe nenhuma classe com esse nome. */      
    

    mosquito.style.left = posx + 'px';               /*  posiciona a imagem no eixo x e concatena com px (pixel) */
    mosquito.style.top = posy + 'px';
    mosquito.style.position = 'absolute';

    console.log(ladoAleatorio());
                                
}


 /* function tamanhoMosquito(){                     /* Cria esta funçao para alternar o tamanho do mosquito mostrado na tela.
    var classe = Math.random() * 3;
     console.log(classe);
 } */



function tamanhoMosquito(){                       
    var classe = Math.floor(Math.random() * 3);     /* elimina as classes decimais utilizando o Math.floor, e enclapsulando o resto da funcao. */
    

    switch(classe){              
        case 0:                        /* caso for 0, retorne mosq01. */
            return 'mosq01';
        case 1:                        /* caso for 1, retorne mosq02. */
            return 'mosq02';
        case 2:                        /* caso for 2, retorne mosq03. */
            return 'mosq03';
            
    }
}


function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2);     /* elimina as classes decimais utilizando o Math.floor, e enclapsulando o resto da funcao. */
    

    switch(classe){              
        case 0:                        /* caso for 0, retorne mosq01. */
            return 'ladoA';
        case 1:                        /* caso for 1, retorne mosq02. */
            return 'ladoB';
        
            
    }

}





