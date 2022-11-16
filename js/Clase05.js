function agregarFila (){
    let reloj = document.getElementById("reloj")
    let titulo = document.getElementById("titulo")
    let descripcion = document.getElementById("descripcion")
    let cuerpoTabla = document.getElementById ("cuerpoTabla")

    let fila = document.createElement("tr")
    let tituloFila = document.createElement("th")
    let celdaTitulo = document.createElement("td")
    let celdaDescripcion = document.createElement("td")
    let celdaRealizado = document.createElement("td")
    let checkboxRealizado = document.createElement ("input")

    tituloFila.textContent = reloj.value
    celdaTitulo.textContent = titulo.value
    celdaDescripcion.textContent = descripcion.value

    checkboxRealizado.type = "checkbox"
    celdaRealizado.appendChild(checkboxRealizado)

    fila.appendChild (tituloFila)
    fila.appendChild (celdaTitulo)
    fila.appendChild (celdaDescripcion)
    fila.appendChild (celdaRealizado)

    cuerpoTabla.appendChild (fila)
}