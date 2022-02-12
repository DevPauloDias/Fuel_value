


function calcular(){

    let distancia = document.getElementById('distancia').value
    let gasolina = document.getElementById('valorgasolina').value
    let rendimento = document.getElementById('rendimento').value

    let calcGasoline = (distancia/ rendimento) * gasolina

    

    let result = document.getElementById('mostrar');

    result.value = `R$ ${calcGasoline.toFixed(2).replace('.', ',')}`

    console.log(calcGasoline)

    
}

function limpar(){
    let distancia = document.getElementById('distancia')
    let gasolina = document.getElementById('valorgasolina')
    let rendimento = document.getElementById('rendimento')
    let result = document.getElementById('mostrar');

    distancia.value= "";
    gasolina.value= "";
    rendimento.value= "";
    result.value ="";
}

