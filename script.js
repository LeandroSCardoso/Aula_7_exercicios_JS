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
        pegadiv.style.display = 'inline' 
        //exibindo terceiro campo
        pegadiv = document.getElementById("cmp3")
        pegadiv.style.display = 'inline'            
      }


      else if (tipo === "menorNumero") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = "Informe dois numeros nos campos abaixo para descobrir qual o menor deles."
        //Exibindo div
        pegadiv = document.getElementById("div-dir")
        pegadiv.style.display = 'inline' 
        //ocultando terceiro campo
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

    






    //VERIFICANDO QUAL O MENOR ENTRE DOIS NUMEROS - INICIO -----------------------------------------------------------------------
    else if (tipo === "menorNumero") {
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



            if ((isNaN(value1)) || (isNaN(value2))) {
                const resultado = document.getElementById("total_ex_1")
                resultado.innerText = "Você precisa informar apenas numeros!!!" 
            }
            else {
            const resultado = document.getElementById("total_ex_1")
            resultado.innerText = "O menor número entre " + value1 + " e " + value2 + " é: " + total   
            } 
    }
    //VERIFICANDO QUAL O MENOR ENTRE DOIS NUMEROS - FINAL -----------------------------------------------------------------------








  }
  