const listaMascotas = document.getElementById("lista-mascotas");
const especie = document.getElementById("especie");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const raza = document.getElementById("raza");
const dueno = document.getElementById("dueno");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar")
let mascotas = [
    {
        especie: "Gato",
        nombre: "Mittens",
        edad: "6 años",
        raza: "Criollo",
        dueno: "Alejandro González"
    }
];

function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, index)=> `<tr>
        <th scope="row">${index}</th>
        <td>${mascota.especie}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.edad}</td>
        <td>${mascota.raza}</td>
        <td>${mascota.dueno}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-info editar")"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
            </div>
        </td>
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
    Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
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
    const accion = botonGuardar.innerHTML;
    switch(accion){
        case "Editar" :
            mascotas[indice.value] = datos;
            break;
        default:
            mascotas.push(datos);
            break;    
    }
    
    listarMascotas();
    resetModal();
}

function editar(index) {
    return function cuandoClick(){
        botonGuardar.innerHTML = "Editar";  
        $("#exampleModal").modal("toggle");
        const mascota = mascotas[index];
        especie.value = mascota.especie;
        nombre.value = mascota.nombre;
        edad.value = mascota.edad;
        raza.value = mascota.raza;
        dueno.value = mascota.dueno;
        indice.value = index;
    }
}

function resetModal(){
    especie.value = "";
    nombre.value = "";
    edad.value = "";
    raza.value = "";
    dueno.value = "";
    indice.value = "";
    botonGuardar.innerHTML = "Crear";
}

listarMascotas();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;