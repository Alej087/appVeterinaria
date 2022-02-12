const listaConsultas = document.getElementById("lista-consultas");
const mascota = document.getElementById("mascota");
const veterinario = document.getElementById("veterinario");
const historiaClinica = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const tratamiento = document.getElementById("tratamiento");
const botonGuardar = document.getElementById("btn-guardar");
const indice = document.getElementById("indice");
const url = "http://localhost:8000";

let mascotas = [];
let consultas = [];
let veterinarios = [];

async function listarConsultas() {
    const entidad = "consultas";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const consultasDelServer = await respuesta.json();
        if(Array.isArray(consultasDelServer)) {
            consultas = consultasDelServer;
        }
        if(respuesta.ok) {
            const htmlConsultas = consultas.map((consulta, indice)=> `<tr>
            <th scope="row">${indice}</th>
            <td>${consulta.fechaCreacion}</td>
            <td>${consulta.fechaModificacion}</td>
            <td>${consulta.mascota.nombre}</td>
            <td>${consulta.veterinario.nombre} ${consulta.veterinario.apellido}</td>
            <td>${consulta.historia}</td>
            <td>${consulta.diagnostico}</td>
            <td>${consulta.tratamiento}</td>           
                <td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-info editar")"><i class="fas fa-edit"></i></button>
                    </div>
                </td>
            </tr>`).join("");
            listaConsultas.innerHTML = htmlConsultas;
            Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
        }    
    } catch (error) {
        $(".alert").show();
    }
}

async function listarMascotas() {
    const entidad = "mascotas";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const mascotasDelServer = await respuesta.json();
        if(Array.isArray(mascotasDelServer)) {
            mascotas = mascotasDelServer;
        }
        if(respuesta.ok) {
            mascotas.forEach((_mascota, indice)=> {
                const optionActual = document.createElement("option");
                optionActual.innerHTML = _mascota.nombre;
                optionActual.value = indice;
                mascota.appendChild(optionActual);
            });
        }    
    } catch (error) {
        $(".alert").show();
    }
}

async function listarVeterinarios() {
    const entidad = "veterinarios";
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const veterinariosDelServer = await respuesta.json();
        if(Array.isArray(veterinariosDelServer)) {
            veterinarios = veterinariosDelServer;
        }
        if(respuesta.ok) {
            veterinarios.forEach((_veterinario, indice)=> {
                const optionActual = document.createElement("option");
                optionActual.innerHTML = `${_veterinario.nombre} ${_veterinario.apellido}`;
                optionActual.value = indice;
                veterinario.appendChild(optionActual);
            });
        }    
    } catch (error) {
        $(".alert").show();
    }
}

function editar(index) {
    return function cuandoClick(){
        botonGuardar.innerHTML = "Editar";  
        $("#exampleModal").modal("toggle");
        const consulta = consultas[index];
        mascota.value = consulta.mascota.id;
        veterinario.value = consulta.veterinario.id;
        historia.value = consulta.historia;
        diagnostico.value = consulta.diagnostico;
        tratamiento.value = consulta.tratamiento;
        indice.value = index;
    };
}

listarConsultas();
listarMascotas();
listarVeterinarios();