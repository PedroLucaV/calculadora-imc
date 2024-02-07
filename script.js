let alt = document.getElementById("altura")
let pes = document.getElementById("peso")
let res = document.getElementById("res")
let calc = document.getElementById("calc")
let limp = document.getElementById("limp")
let classi = document.getElementById("class")

calc.addEventListener("click", function(){
    let altura = alt.value
    let peso = pes.value
    let calculo = 0

    calculo = peso / (altura * altura)

    res.innerHTML = `${calculo.toFixed(1)} de IMC`

    if(altura == '' || isNaN(altura) || altura <= 0){
        window.confirm('INFORME UM VALOR VALIDO PARA ALTURA')
        location.reload()
    }else if (peso == '' || isNaN(peso) || peso <= 0){
        window.confirm('INFORME UM VALOR VALIDO PARA PESO')
        location.reload()
    }else{
        if(calculo < 16.9){
            classi.innerHTML = 'Muito Abaixo'
        }else if(calculo > 16.9 && calculo <= 18.4){
            classi.innerHTML = 'Abaixo'
        }else if(calculo >= 18.5 && calculo <= 24.9){
            classi.innerHTML = 'Normal'
        }else if(calculo >= 25 && calculo <= 29.9){
            classi.innerHTML = 'Acima'
        }else if(calculo >= 30 && calculo <= 34.9){
            classi.innerHTML = 'OB 1'
        }else if(calculo >= 35 && calculo <= 40){
            classi.innerHTML = 'OB 2'
        }else if(calculo >40){
            classi.innerHTML = 'OB 3'
        }
    }
})

limp.addEventListener('click',() => {
    let resul = res
    let classif = classi
    resul.innerHTML = 'Aguardando valores...'
    classif.innerHTML = ''
})