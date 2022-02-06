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
const botonGuardar = document.getElementById("btn-guardar")
const botonNueva = document.getElementById("botonCrear")
let duenos = [
    {
        tipoDocumento : "C.C.",
        numeroDocumento : 1128268161,
        nombre : "Alejandro",
        apellido : "González",
        numeroContacto : 3012996400, 
        direccion : "Cra 62 # 165 A 88 Torre 3 Apto 1203",
        email : "alejo87.gonzalez@gmail.com",
    }
];

function listarDuenos() {
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
}

function enviarDatos(evento){
    evento.preventDefault();
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
    switch(accion){
        case "Editar" :
            duenos[indice.value] = datos;
            break;
        default:
            duenos.push(datos);
            break;    
    }
    
    listarDuenos();
    resetModal();
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
    return function cuandoClickEliminar(){
        duenos = duenos.filter((dueno,indiceDueno)=>indiceDueno !== index);
        listarDuenos();
    }
}

listarDuenos();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;