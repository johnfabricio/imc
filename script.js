function calcular(){
    var fpeso = document.getElementById('txtpeso')
    var faltura = document.getElementById('txtaltura')
    var kg = Number(fpeso.value)
    var h = Number(faltura.value)
    var res = document.querySelector('div#res')
    var imc = kg / (h*h)

    if (imc < 18.5){
        //abaixo do peso

    }
    else if(imc >= 18.5 && imc< 25){
        //Normal
    }
    else if(imc >= 25 && imc< 30){
        //Acima do peso
    }
    else if(imc >= 30 && imc< 35){
        //Obeso
    }
    else{
        //Super obeso
        
    }



    res.innerHTML = `Massa: ${kg} e Altura ${h} e SOMA ${imc}`
}