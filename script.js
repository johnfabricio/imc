function calcular(){
    var fpeso = document.getElementById('txtpeso')
    var faltura = document.getElementById('txtaltura')
    var kg = Number(fpeso.value)
    var h = Number(faltura.value)
    var res = document.querySelector('div#res')
    var fimc = kg / (h*h)
    var imc = fimc.toFixed(2)
    var condicao = ''

    if(kg.value.length == 0){
        window.alert('ERRO')
    }

    if (imc < 18.5){
        //abaixo do peso
        condicao = 'abaixo do peso'

    }
    else if(imc >= 18.5 && imc< 25){
        //Normal
        condicao = 'normal'
    }
    else if(imc >= 25 && imc< 30){
        //Acima do peso
        condicao = 'acima do peso'
    }
    else if(imc >= 30 && imc< 35){
        //Obeso
        condicao = 'obeso'
    }
    else{
        //Super obeso
        condicao = 'super obeso'
        
    }



    res.innerHTML = `Seu IMC é ${imc} sendo considerado <strong>${condicao}</strong>`
    
}