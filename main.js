const contenido= document.getElementById("contenido");

let nombre = "Oscar Aguirre";
let edad = 25;

let edades = [55, 49, 29, 27, 25, 14];

console.log(edades.length);

addcontent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i = 0; i < edades.length; i++){
    addcontent(`<h3>la edad es de ${edades[i]}años</h3>`);
}

function addcontent(newContent){
    contenido.innerHTML +=newContent;
}
















