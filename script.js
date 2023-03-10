//FUNÇÃO PARA AJUSTAR OS TITULOS DOS 3 CAMPOS INPUT
function ajusta_titulo() {
    let tipo = document.querySelector('input[name="selecionado"]:checked').id;
    let resultado = "";
    let pegadiv = "";
  
    if (tipo === "imprimepares") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = ""
        //ocultando div
        pegadiv = document.getElementById("div-dir");
        pegadiv.style.display = 'none';  
      }

     else if (tipo === "calculaMedia") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = "Informe três valores nos campos abaixo para obter a média."
        //Exibindo div
        pegadiv = document.getElementById("div-dir")
        pegadiv.style.display = 'block' 
        //exibindo primeiro campo
        pegadiv = document.getElementById("cmp1")
        pegadiv.style.display = 'block'         
        //exibindo segundo campo
        pegadiv = document.getElementById("cmp2")
        pegadiv.style.display = 'block'         
        //ocultando terceiro campo
        pegadiv = document.getElementById("cmp3")
        pegadiv.style.display = 'block'             
      }


      else if ((tipo === "menorNumero") || (tipo === "maiorNumero")) {
        resultado = document.getElementById("tit_func")
            if (tipo === "menorNumero") {
                resultado.innerText = "Informe dois numeros nos campos abaixo para descobrir qual o menor deles."
            } else {    
                resultado.innerText = "Informe dois numeros nos campos abaixo para descobrir qual o maior deles."
            }
        //Exibindo div
        pegadiv = document.getElementById("div-dir")
        pegadiv.style.display = 'block'
        //exibindo primeiro campo
        pegadiv = document.getElementById("cmp1")
        pegadiv.style.display = 'block'          
        //Exibindo o segundo campo 
        pegadiv = document.getElementById("cmp2")
        pegadiv.style.display = 'block'         
        //ocultando terceiro campo
        pegadiv = document.getElementById("cmp3")
        pegadiv.style.display = 'none'                
      } 
      
      else if (tipo === "inverteArray") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = ""
        //ocultando div
        pegadiv = document.getElementById("div-dir");
        pegadiv.style.display = 'none';  
      } 


      else if (tipo === "encontrarNumero") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = "Informe um numero para verificar se ele existe em uma array"
        //Exibindo div
        pegadiv = document.getElementById("div-dir")
        pegadiv.style.display = 'block' 
        //exibindo primeiro campo
        pegadiv = document.getElementById("cmp1")
        pegadiv.style.display = 'block'           
        //ocultando segundo e terceiro campo
        pegadiv = document.getElementById("cmp2")
        pegadiv.style.display = 'none'               
        pegadiv = document.getElementById("cmp3")
        pegadiv.style.display = 'none'               
      } 


      
      //RESETANDO O CAMPO DE RESULTADO
      const limpa = document.getElementById("total_ex_1")
      limpa.innerText = ""       
    }



//FUNÇÃO PARA EFETUAR A SOMA DE 3 NUMEROS PEGANDO PELOS 3 CAMPOS
function somar_ex() {
    // PEGANDO OS VALORES DOS INPUTS
    let total = 0
    const valor1 = document.getElementById("val1")
    const valor2 = document.getElementById("val2")
    const valor3 = document.getElementById("val3")

    // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
    const value1 = Number(valor1.value)
    const value2 = Number(valor2.value)
    const value3 = Number(valor3.value)

    // PROCESSAMENTO - CALCULO
    total = value1 + value2 + value3

    //VALIDANDO A SAIDA
    if (isNaN(total)) {
        const resultado = document.getElementById("total_ex")
        resultado.innerText = "Impossível somar, utilize apenas numeros" 
    }
    else {
      const resultado = document.getElementById("total_ex")
      resultado.innerText = "Total da Soma: " + total   
    } 
}

//FUNÇÃO QUE EXECUTA AS 
function executa() {

    //DESCOBRINDO QUAL FUNÇÃO ESCOLHIDA
    let tipo = document.querySelector('input[name="selecionado"]:checked').id;
    


    //CALCULANDO OS PARES - INICIO -----------------------------------------------------------------------------
    if (tipo === "imprimepares") {
        let calculo = "";
        for (let i = 2; i <= 100; i += 2) {
        calculo += i + " ";
      }
      const resultado = document.getElementById("total_ex_1")
      resultado.innerText = 'Numero pares entre 1-100: ' + calculo
    } 
    //CALCULANDO OS PARES - FINAL ------------------------------------------------------------------------------







    //FAZENDO A MEDIA DE NUMERO - INICIO -----------------------------------------------------------------------
    else if (tipo === "calculaMedia") {
        // PEGANDO OS VALORES DOS INPUTS
        let total = 0
        const valor1 = document.getElementById("val1")
        const valor2 = document.getElementById("val2")
        const valor3 = document.getElementById("val3")

        // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
        const value1 = Number(valor1.value)
        const value2 = Number(valor2.value)
        const value3 = Number(valor3.value)

        // PROCESSAMENTO - CALCULO
        total = (value1 + value2 + value3) / 3  

        //VALIDANDO A SAIDA
        if (isNaN(total)) {
            const resultado = document.getElementById("total_ex_1")
            resultado.innerText = "Impossível calcular, utilize apenas numeros" 
        }
        else {
        const resultado = document.getElementById("total_ex_1")
        resultado.innerText = "A média entre os três valores é: " + total   
        } 
    }
    //FAZENDO A MEDIA DE NUMERO - FINAL  -----------------------------------------------------------------------    

    






    //VERIFICANDO QUAL O MENOR OU MAIOR NUMERO ENTRE DOIS NUMEROS - INICIO -----------------------------------------------------------------------
    else if ((tipo === "menorNumero") || (tipo === "maiorNumero")) {
        // PEGANDO OS VALORES DOS INPUTS
        let total = 0
        const valor1 = document.getElementById("val1")
        const valor2 = document.getElementById("val2")
     
        // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
        const value1 = Number(valor1.value)
        const value2 = Number(valor2.value)
     
        // PROCESSAMENTO - CALCULO
            if (value1 < value2){
                total = value1
            } else {
                total = value2    
            }

        //VALIDANDO A SAIDA
        const resultado = document.getElementById("total_ex_1")

        if ((isNaN(value1)) || (isNaN(value2))) {
            //const resultado = document.getElementById("total_ex_1")
            resultado.innerText = "Você precisa informar apenas numeros!!!" 
        }
        else {
            if (tipo === "menorNumero"){
                //RETORNA O MENOR NUMERO
                //const resultado = document.getElementById("total_ex_1")
                resultado.innerText = "O menor número entre " + value1 + " e " + value2 + " é: " + total       
            } else {
                //RETORNA O MAIOR NUMERO
                    //const resultado = document.getElementById("total_ex_1")
                if (value1 > value2) {
                    resultado.innerText = "O maior número entre " + value1 + " e " + value2 + " é: " + value1   
                } else {
                    resultado.innerText = "O maior número entre " + value1 + " e " + value2 + " é: " + value2   
                }  
            }


        } 
    }
    //VERIFICANDO QUAL O MENOR ENTRE DOIS NUMEROS - FINAL -----------------------------------------------------------------------







    //INVERTENDO UMA ARRAY - INICIO ---------------------------------------------------------------------------------------------
    else if (tipo === "inverteArray") {
    /*
    SE EU FOSSE FAZER DA FORMA MAIS RAPIDA COMO EXPLICASTE ONTEM.
    function inverteArray(arr) {
        return arr.reverse();
        }        

        
      
    SEGUNDA OPÇÃO ONDE NÃO UTILIZEI O REVERSE, MAS FUI INCREMENTANDO COM METODO PUSH
    function inverteArray(arr) {
        const tamanho = arr.length;
        const arrayInvertida = [];
        
        for (let i = tamanho - 1; i >= 0; i--) {
            arrayInvertida.push(arr[i]);
        }
        
        return arrayInvertida;
        } */   

    //COMO É PARA APRENZIDADO VOU MANTER A FORMA MAIS NA MÃO QUE SERIA COM DUAS ARRAYS

    const dados = [12, 9, 7, 4, 1];
    const arrayInvertida = inverteArray(dados);
    //console.log(arrayInvertida); // Resultado: [1,4,7,9,12]

    function inverteArray(arr) {
        const tamanho = arr.length;
        const arrayInvertida = new Array(tamanho);
      
        for (let i = 0; i < tamanho; i++) {
          arrayInvertida[i] = arr[tamanho - i - 1];
        }
      
        // return arrayInvertida;
        const resultado = document.getElementById("total_ex_1")
        resultado.innerText = `Array invertida fica: [${arrayInvertida}]`; 
      }
    }
    //INVERTENDO UMA ARRAY - FINAL ---------------------------------------------------------------------------------------------






    //DESCOBRINDO SE EXISTE UM NUMERO EM UMA ARRAY - INICIO --------------------------------------------------------------------
    else if (tipo === "encontrarNumero") {
        const valor1 = document.getElementById("val1")
     
        // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
        const value1 = Number(valor1.value)
      
        const dados = [12, 9, 7, 4, 1];
        const descobre = encontrarNumero(value1,dados)
        //console.log(descobre);

    function encontrarNumero(numero, array) {
        const resultado = document.getElementById("total_ex_1")

        if (isNaN(value1)) {
            //const resultado = document.getElementById("total_ex_1")
            resultado.innerText = "Informe apenas numeros por favor!!!" 
        } else {

            for (let i = 0; i < array.length; i++) {
                if (array[i] === numero) {
                    return resultado.innerText = `O número ${numero} foi encontrado na array [${array}]` 
                }
            }

            return resultado.innerText = `O número ${numero} NÃO foi encontrado na array [${array}]` 
            
            }
        }
    }    
    //DESCOBRINDO SE EXISTE UM NUMERO EM UMA ARRAY - FINAL ---------------------------------------------------------------------

}
  