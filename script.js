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


function executa() {
    let tipo = document.querySelector('input[name="selecionado"]:checked').id;
    let resultado = "";
  
    if (tipo === "imprimepares") {
      for (let i = 2; i <= 100; i += 2) {
        resultado += i + " ";
      }

    } else if (tipo === "impares") {
      for (let i = 1; i <= 100; i += 2) {
        resultado += i + " ";
      }
    }
  
    document.getElementById("total_ex_1").innerText = 'Calculo: ' + resultado;
  }

  function ajusta_titulo() {
    let tipo = document.querySelector('input[name="selecionado"]:checked').id;
    let resultado = "";
  
    if (tipo === "imprimepares") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = "Campos não utilizados na função selecionada"
      }

     else if (tipo === "calculaMedia") {
        resultado = document.getElementById("tit_func")
        resultado.innerText = "Informe três valores nos campos abaixo para obter a média."
      }
    }
  