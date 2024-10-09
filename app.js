function Descuento(valor,porcentaje){
    if (valor > 0 && porcentaje >0){
        let descuento = valor - (valor * porcentaje / 100);
        return descuento
    }else{
        return valor  
    }
}

function multi(valor){
    for (let i = 1; i <= 10; i++) {
       console.log(valor+"*"+i+"= "+valor * i)  
    }
}

document.getElementById("enviar").addEventListener("click", ()=> {
    let input = document.getElementById("input").value
    multi(input)
})


