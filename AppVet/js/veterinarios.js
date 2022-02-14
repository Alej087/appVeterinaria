const listaEmpleados = document.getElementById("lista-empleados");
const cargo = document.getElementById("cargo");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar");
const botonNueva = document.getElementById("botonCrear");
const url = "http://https://veterinaria-backend-liart-one.vercel.app/veterinarios";
let empleados = [];

async function listarEmpleados() {
    try {
        const respuesta = await fetch(url);
    const empleadosDelServer = await respuesta.json();
    if (Array.isArray(empleadosDelServer)) {
        empleados = empleadosDelServer;
    }
    if (empleados.length > 0) {
        const htmlEmpleados = empleados.map((empleado, index)=> `<tr>
            <th scope="row">${index}</th>
            <td>${empleado.cargo}</td>
            <td>${empleado.nombre}</td>
            <td>${empleado.apellido}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-info editar")"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>`).join("");
        listaEmpleados.innerHTML = htmlEmpleados;
        Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index)=>botonEditar.onclick=editar(index));
        Array.from(document.getElementsByClassName("eliminar")).forEach((botonEliminar, index)=>botonEliminar.onclick=eliminarEmpleado(index));
        return;
    }  
    listaEmpleados.innerHTML = `<tr>
        <td colspan="5" class="lista-vacia"> No hay empleados</td>
        </tr>`;
    } catch (error) {
        $(".alert").show();
    }
}

async function enviarDatos(evento){
    evento.preventDefault();
    try {
        const datos = {
            cargo : cargo.value,
            nombre : nombre.value,
            apellido : apellido.value,
        };
        const accion = botonGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST"
        if(accion === "Editar") {
            urlEnvio += `/${indice.value}`; 
            method = "PUT";   
        }
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
            mode: "cors"
        });
        if(respuesta.ok) {
            listarEmpleados();
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
        const empleado = empleados[index];
        cargo.value = empleado.cargo;
        nombre.value = empleado.nombre;
        apellido.value = empleado.apellido;
        indice.value = index;
    }
}

function resetModal(){
    cargo.value = "";
    nombre.value = "";
    apellido.value = "";
    indice.value = "";
    botonGuardar.innerHTML = "Crear";
}

function eliminarEmpleado(index){
    const urlEnvio = `${url}/${index}`
    return async function cuandoClickEliminar(){
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
                mode: "cors",
            });
            if(respuesta.ok) {
                listarEmpleados();
            }
        } catch (error) { 
            console.log({error}); 
            $(".alert").show();
        }
    }
}

listarEmpleados();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;