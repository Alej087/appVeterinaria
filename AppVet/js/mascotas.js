const listaMascotas = document.getElementById("lista-mascotas");
const especie = document.getElementById("especie");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const raza = document.getElementById("raza");
const dueno = document.getElementById("dueno");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar");
const botonNueva = document.getElementById("botonCrear");
const url = "http://localhost:8000/mascotas";
let mascotas = [];

async function listarMascotas() {
    try{
        const respuesta = await fetch(url);
        const mascotasDelServer = await respuesta.json();
        if(Array.isArray(mascotasDelServer) && mascotasDelServer.length > 0) {
            mascotas = mascotasDelServer;
        }
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
                    <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>`).join("");
        listaMascotas.innerHTML = htmlMascotas;
        Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
        Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminarMascota(index));
    } catch (error){
        throw error;
    }
}

async function enviarDatos(evento){
    evento.preventDefault();
    try {
        const datos = {
            especie : especie.value,
            nombre : nombre.value,
            edad : edad.value,
            raza : raza.value,
            dueno : dueno.value,
        };
        let method = "POST";
        let urlEnvio = url;
        const accion = botonGuardar.innerHTML;
        if(accion === "Editar"){
                method = "PUT";
                mascotas[indice.value] = datos;
                urlEnvio = `${url}/${indice.value}`;   
        }
        
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos),
        });
        if(respuesta.ok) {
            listarMascotas();
            resetModal();
        }
        
    } catch (error) {
        throw error;
    }
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

function eliminarMascota(index){
    return function cuandoClickEliminar(){
        mascotas = mascotas.filter((mascota,indiceMascota)=>indiceMascota !== index);
        listarMascotas();
    };
}

listarMascotas();

form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;