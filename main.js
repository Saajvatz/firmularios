let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";

//Lista de datos(String)
let formulario = [ 
    {nombre: "Login", link:"componentes/login/login.html"},
    {nombre: "Busqueda", link:"componentes/formularioDeBusqueda/forB.html"},
    {nombre: "Contacto", link:"componentes/formularioDeContacto/forC.html"},
    {nombre: "Registro", link:"componentes/formularioDeRegistro/forR.html"},
    {nombre: "Comentarios y Reseñas", link:"componentes/formulariosDeComercioYResennas/forComer.html"},

];

formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);