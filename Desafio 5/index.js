const productos = ["leche", "arroz", "milanesa", "jamon"]
//<>
for (let i=0; i<productos.length; i++) {
    console.log(productos[i])
}

productos.pop()
console.log("Lista de productos actualizada: \n" + productos)