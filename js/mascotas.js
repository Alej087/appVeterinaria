const listaMascotas = document.getElementById("lista-mascotas");
const especie = document.getElementById("especie");
const nombre = document.getElementById("nombre");
const raza = document.getElementById("raza");
const edad = document.getElementById("edad");
const dueno = document.getElementById("dueno");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar")
let mascotas = [
    {
        especie: "Gato",
        nombre: "Mittens",
        raza: "Criollo",
        edad: "6 años",
        dueno: "Alejandro González"
    }
];

function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, index)=> `<tr>
        <th scope="row">${index}</th>
        <td>${mascota.especie}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.raza}</td>
        <td>${mascota.edad}</td>
        <td>${mascota.dueno}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-info editar" data-indice=${index}><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
            </div>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName("editar")).forEach((botonEditar)=>botonEditar.onclick=editar);
}

function enviarDatos(evento){
    evento.preventDefault();
    const datos = {
        especie : especie.value,
        nombre : nombre.value,
        edad : edad.value,
        raza : raza.value,
        dueno : dueno.value,
    };
    mascotas.push(datos);
    listarMascotas();
}

function editar(evento) {
    console.log("editar", evento);
}

listarMascotas();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;