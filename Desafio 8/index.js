let array = ["camiseta", "short", "medias", "termica"];

for (const iterator of array) {
    let h2 = document.createElement("h2");
    h2.innerHTML = "<p>Producto: "+ iterator +"</p>";
    document.body.appendChild(h2)
}