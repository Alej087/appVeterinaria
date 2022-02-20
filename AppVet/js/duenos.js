const listaDuenos = document.getElementById("lista-duenos");
const tipoDocumento = document.getElementById("tipo-documento");
const numeroDocumento = document.getElementById("documento");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const numeroContacto = document.getElementById("numero-contacto");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar");
const botonNueva = document.getElementById("botonCrear");
const url = "https://veterinaria-backend-liart-one.vercel.app/duenos";
let duenos = [];

async function listarDuenos() {
    try {
        const respuesta = await fetch(url);
        const duenosDelServer = await respuesta.json();
        if(Array.isArray(duenosDelServer)) {
            duenos = duenosDelServer;
        }
        if(duenos.length > 0) {
                const htmlDuenos = duenos.map((dueno, index)=> `<tr>
                <th scope="row">${index}</th>
                <td>${dueno.tipoDocumento}</td>
                <td>${dueno.numeroDocumento}</td>
                <td>${dueno.nombre}</td>
                <td>${dueno.apellido}</td>
                <td>${dueno.numeroContacto}</td>
                <td>${dueno.direccion}</td>
                <td>${dueno.email}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-info editar")"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>`).join("");
            listaDuenos.innerHTML = htmlDuenos;
            Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
            Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminarDueno(index));
            return;
        }
        listaDuenos.innerHTML = `<tr>
        <td colspan="9" class="lista-vacia">No hay dueños</td>
        </tr>`;
    } catch (error) {
        $(".alert").show();
    }    
}

async function enviarDatos(evento){
    evento.preventDefault();
    try {
        const datos = {
            tipoDocumento : tipoDocumento.value,
            numeroDocumento : numeroDocumento.value,
            nombre : nombre.value,
            apellido : apellido.value,
            numeroContacto : numeroContacto.value,
            direccion : direccion.value,
            email : email.value,
        };
        const accion = botonGuardar.innerHTML;
        let urlEnvio = url;
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
            listarDuenos();
            resetModal();
        } 
    } catch (error) {
        $(".alert").show();
    } 
}

function editar(index) {
    return function cuandoClick(){
        botonGuardar.innerHTML = "Editar";  
        $("#exampleModal").modal("toggle");
        const dueno = duenos[index];
        tipoDocumento.value = dueno.tipoDocumento;
        numeroDocumento.value = dueno.numeroDocumento;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        numeroContacto.value = dueno.numeroContacto;
        direccion.value = dueno.direccion;
        email.value = dueno.email;
        indice.value = index;
    }
}

function resetModal(){
    tipoDocumento.value = "";
    numeroDocumento.value = "";
    nombre.value = "";
    apellido.value = "";
    numeroContacto.value = "";
    direccion.value = "";
    email.value = "";
    indice.value = "";
    botonGuardar.innerHTML = "Crear";
}

function eliminarDueno(index){
    const urlEnvio = `${url}/${index}`
    return async function cuandoClickEliminar(){
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
                mode: "cors",
            });
            if(respuesta.ok) {
                listarDuenos();
            }
        } catch (error) {
            console.log({error});
            $(".alert").show();
        }
    }
}

listarDuenos();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;