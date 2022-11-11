const VALOR_PRENDA = 5000   

function cambiarTexto () {
    let div1 = document.getElementById("div1")
    div1.textContent= "Otro texto"
    alert ("Te cambio el texto del div 1")
}

function comprar(){
    let tagPrecio = document.getElementById("precio")
    let precio = Number(tagPrecio.textContent)


    let cantPrendas = document.getElementById("cantPrendas")
    let cantidadSeleccionada = Number(cantPrendas.value)
    if(cantidadSeleccionada===0){
        alert("Seleccione mas de una prenda")
    }
    alert("El precio total es: "+(precio*cantidadSeleccionada))
}

function calcularTotal(){
    let tagPrecio = document.getElementById("precio")
    let cantPrendas = document.getElementById("cantPrendas")
    let cantidadSeleccionada = Number(cantPrendas.value)

    let total = VALOR_PRENDA*cantidadSeleccionada

    tagPrecio.textContent = total
}