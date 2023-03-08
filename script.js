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