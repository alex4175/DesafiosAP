function sumarProductos (a, b) {
    return a * b;
}

let precioUnitario = 70
let cantidadDeseada = Number(prompt("Ingrese la cantidad deseada a comprar, el precio es de " + precioUnitario))

alert(sumarProductos(precioUnitario, cantidadDeseada))