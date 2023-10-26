//Se ja está na página, prevenir de ir novamente para ela
let btnPedido = document.getElementById("btn-pedido");
btnPedido.addEventListener("click", (e)=> {
       e.preventDefault()
       alert("Já está na página de pedidos.");   
});

//Gerar Hint dos menus.
$(document).ready(function() {
    // Tooltip only Text
     $('.button').hover(
       
       function(){
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
     }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip')
            .css({ top: mousey, left: mousex })
     });
});

//Prevenir inputs do teclado
function preventKeyboardInput(event) {
       event.preventDefault();
}

// ------------ITENS DO CARRINHO---------------------//

/* Simulando os valores dos produtos que poderiam vir de um banco de dados no backend */
let Produto01 = 450
let Produto02 = 600
let Produto03 = 490
let Produto04 = 300
let Produto05 = 800
let Produto06 = 450

let valorProduto01 = document.getElementById("valor-produto-01") 
let valorProduto02 = document.getElementById("valor-produto-02") 
let valorProduto03 = document.getElementById("valor-produto-03") 
let valorProduto04 = document.getElementById("valor-produto-04") 
let valorProduto05 = document.getElementById("valor-produto-05") 
let valorProduto06 = document.getElementById("valor-produto-06") 



// Atualizar DOM
function atualizarDOM(){
       valorProduto01.innerText = Produto01;
       valorProduto02.innerText = Produto02;
       valorProduto03.innerText = Produto03;
       valorProduto04.innerText = Produto04;
       valorProduto05.innerText = Produto05;
       valorProduto06.innerText = Produto06;        
}

atualizarDOM();

// Capturar elementos para aumentar a quantidade + 1 
let btnAdicionar1 = document.getElementById ('btn-adicionar-produto-01');
let quantidadeProduto01 = document.getElementById ('quantidade-produto-01');

let btnAdicionar2 = document.getElementById ('btn-adicionar-produto-02');
let quantidadeProduto02 = document.getElementById ('quantidade-produto-02');

let btnAdicionar3 = document.getElementById ('btn-adicionar-produto-03');
let quantidadeProduto03 = document.getElementById ('quantidade-produto-03');

let btnAdicionar4= document.getElementById ('btn-adicionar-produto-04');
let quantidadeProduto04 = document.getElementById ('quantidade-produto-04');

let btnAdicionar5 = document.getElementById ('btn-adicionar-produto-05');
let quantidadeProduto05 = document.getElementById ('quantidade-produto-05');

let btnAdicionar6 = document.getElementById ('btn-adicionar-produto-06');
let quantidadeProduto06 = document.getElementById ('quantidade-produto-06');


// Capturar elementos para subtrair a quantidade - 1 
let btnSubtrair1 = document.getElementById ('btn-subtrair-produto-01');
quantidadeProduto01 = document.getElementById ('quantidade-produto-01');

let btnSubtrair2 = document.getElementById ('btn-subtrair-produto-02');
quantidadeProduto02 = document.getElementById ('quantidade-produto-02');

let btnSubtrair3 = document.getElementById ('btn-subtrair-produto-03');
quantidadeProduto03 = document.getElementById ('quantidade-produto-03');

let btnSubtrair4= document.getElementById ('btn-subtrair-produto-04');
quantidadeProduto04 = document.getElementById ('quantidade-produto-04');

let btnSubtrair5 = document.getElementById ('btn-subtrair-produto-05');
quantidadeProduto05 = document.getElementById ('quantidade-produto-05');

let btnSubtrair6 = document.getElementById ('btn-subtrair-produto-06');
quantidadeProduto06 = document.getElementById ('quantidade-produto-06');



//Função Incrementa o valor do produto
function adicionar1(){
       quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
       valorProduto01.innerText = Number(valorProduto01.innerText) + Number(Produto01.toFixed(2));
};

function adicionar2(){      
       quantidadeProduto02.value = Number(quantidadeProduto02.value) + 1;
       valorProduto02.innerText = Number(valorProduto02.innerText) + Number(Produto02.toFixed(2));
};

function adicionar3(){      
       quantidadeProduto03.value = Number(quantidadeProduto03.value) + 1;
       valorProduto03.innerText = Number(valorProduto03.innerText) + Number(Produto03.toFixed(2));
};
       
function adicionar4(){      
       quantidadeProduto04.value = Number(quantidadeProduto04.value) + 1;
       valorProduto04.innerText = Number(valorProduto04.innerText) + Number(Produto04.toFixed(2));
};

function adicionar5(){      
       quantidadeProduto05.value = Number(quantidadeProduto05.value) + 1;
       valorProduto05.innerText = Number(valorProduto05.innerText) + Number(Produto05.toFixed(2));
};
       
function adicionar6(){      
       quantidadeProduto06.value = Number(quantidadeProduto06.value) + 1;
       valorProduto06.innerText = Number(valorProduto06.innerText) + Number(Produto06.toFixed(2));
};


//Função Subtrai o valor do produto
function subtrair1(){

       quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
       valorProduto01.innerText = Number(valorProduto01.innerText) - Number(Produto01.toFixed(2));
};

function subtrair2(){      
       quantidadeProduto02.value = Number(quantidadeProduto02.value) - 1;
       valorProduto02.innerText = Number(valorProduto02.innerText) - Number(Produto02.toFixed(2));
};

function subtrair3(){      
       quantidadeProduto03.value = Number(quantidadeProduto03.value) - 1;
       valorProduto03.innerText = Number(valorProduto03.innerText) - Number(Produto03.toFixed(2));
};
       
function subtrair4(){      
       quantidadeProduto04.value = Number(quantidadeProduto04.value) - 1;
       valorProduto04.innerText = Number(valorProduto04.innerText) - Number(Produto04.toFixed(2));
};

function subtrair5(){      
       quantidadeProduto05.value = Number(quantidadeProduto05.value) - 1;
       valorProduto05.innerText = Number(valorProduto05.innerText) - Number(Produto05.toFixed(2));
       };
       
function subtrair6(){      
       quantidadeProduto06.value = Number(quantidadeProduto06.value) - 1;
       valorProduto06.innerText = Number(valorProduto06.innerText) - Number(Produto06.toFixed(2));
};

// Eventos
btnAdicionar1.addEventListener("click", adicionar1);
btnAdicionar2.addEventListener("click", adicionar2);
btnAdicionar3.addEventListener("click", adicionar3);
btnAdicionar4.addEventListener("click", adicionar4);
btnAdicionar5.addEventListener("click", adicionar5);
btnAdicionar6.addEventListener("click", adicionar6);

btnSubtrair1.addEventListener("click", subtrair1);
btnSubtrair2.addEventListener("click", subtrair2);
btnSubtrair3.addEventListener("click", subtrair3);
btnSubtrair4.addEventListener("click", subtrair4);
btnSubtrair5.addEventListener("click", subtrair5);
btnSubtrair6.addEventListener("click", subtrair6);


// Validar valor do input se menor que valor 0
btnSubtrair1.addEventListener("click", (subtrair1)=> {
       let valor = subtrair1.target.value  
       if(Number(quantidadeProduto01.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto01.value ="0";
              valorProduto01.innerText = "0";
       }        
});

btnSubtrair2.addEventListener("click", (subtrair2)=> {
       let valor = subtrair2.target.value  
       if(Number(quantidadeProduto02.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto02.value ="0";
              valorProduto02.innerText = "0";
       }        
});

btnSubtrair3.addEventListener("click", (subtrair3)=> {
       let valor = subtrair3.target.value  
       if(Number(quantidadeProduto03.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto03.value ="0";
              valorProduto03.innerText = "0";
       }        
});

btnSubtrair4.addEventListener("click", (subtrair4)=> {
       let valor = subtrair4.target.value  
       if(Number(quantidadeProduto04.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto04.value ="0";
              valorProduto04.innerText = "0";
       }        
});

btnSubtrair5.addEventListener("click", (subtrair5)=> {
       let valor = subtrair5.target.value  
       if(Number(quantidadeProduto05.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto05.value ="0";
              valorProduto05.innerText = "0";
       }        
});

btnSubtrair6.addEventListener("click", (subtrair6)=> {
       let valor = subtrair6.target.value  
       if(Number(quantidadeProduto06.value) < 0){             
              alert("Não é possível ter valores negativos na quantidade do produto.")
              quantidadeProduto06.value ="0";
              valorProduto06.innerText = "0";
       }        
});

let valorTotal = document.getElementById("valor-total");
let btnFimPedido = document.getElementById("fechar-pedido");

function totalPedido() {
       total = (Number(valorProduto01.innerText) + Number(valorProduto02.innerText) + Number(valorProduto03.innerText) +
                Number(valorProduto04.innerText) + Number(valorProduto05.innerText) + Number(valorProduto06.innerText));
       valorTotal.innerHTML = total
       alert("O seu pedido foi finalizado com o valor de " + "R$ " + total + ",00");
}

btnFimPedido.addEventListener("click", totalPedido);
  