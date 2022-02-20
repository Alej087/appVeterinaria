const listaConsultas = document.getElementById("lista-consultas");
const mascota = document.getElementById("mascota");
const veterinario = document.getElementById("veterinario");
const historiaClinica = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const tratamiento = document.getElementById("tratamiento");
const botonGuardar = document.getElementById("btn-guardar");
const formulario = document.getElementById("formulario");
const indice = document.getElementById("indice");
const url = "https://veterinaria-backend-liart-one.vercel.app";

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
            <td>${consulta.historiaClinica}</td>
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
        $(".alert-danger").show();
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
        $(".alert-danger").show();
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
        $(".alert-danger").show();
    }
}

function editar(index) {
    return function cuandoClick(){
        botonGuardar.innerHTML = "Editar";  
        $("#exampleModal").modal("toggle");
        const consulta = consultas[index];
        mascota.value = consulta.mascota.id;
        veterinario.value = consulta.veterinario.id;
        historiaClinica.value = consulta.historiaClinica;
        diagnostico.value = consulta.diagnostico;
        tratamiento.value = consulta.tratamiento;
        indice.value = index;
    };
}

async function enviarDatos(evento){
    const entidad = "consultas";
    evento.preventDefault();
    try {
        const datos = {
            mascota: mascota.value,
            veterinario: veterinario.value,
            historia: historiaClinica.value,
            diagnostico: diagnostico.value,
            tratamiento: tratamiento.value,
        };
        if(validar(datos) === true) {
            const accion = botonGuardar.innerHTML;
            let urlEnvio = `${url}/${entidad}`;
            let method = "POST";
            if(accion === "Editar"){
                urlEnvio += `/${indice.value}`;
                method = "PUT";
            }
            const respuesta = await fetch(urlEnvio, {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
                mode: "cors",
            });
            if(respuesta.ok) {
                listarConsultas();
                resetModal();
            }
            return;
        }
        $(".alert-warning").show();
    } catch (error) {
        $(".alert-danger").show();
    } 
}

function resetModal(){
    botonGuardar.innerHTML = "Crear";
    [indice, mascota, veterinario, historiaClinica, diagnostico,tratamiento].forEach((inputActual) => {
        inputActual.value = "";
        inputActual.classList.remove("is-valid");
        inputActual.classList.remove("is-invalid");
    });
    $(".alert-warning").hide();
    $("#exampleModal").modal("toggle");
}

function validar(datos) {
    if(typeof datos !== "object") return false;
    let respuesta = true;
    for( let llave in datos) {
        if(datos[llave].length === 0) {
            document.getElementById(llave).classList.add("is-invalid");
            respuesta = false;
        } else {
            document.getElementById(llave).classList.remove("is-invalid");
            document.getElementById(llave).classList.add("is-valid");
        }
    }
    if(respuesta === true) $(".alert-warning").hide();
    return respuesta;
}


botonGuardar.onclick = enviarDatos;


listarConsultas();
listarMascotas();
listarVeterinarios();