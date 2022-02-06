const listaEmpleados = document.getElementById("lista-empleados");
const cargo = document.getElementById("cargo");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const indice = document.getElementById("indice");
const form = document.getElementById("form");
const botonGuardar = document.getElementById("btn-guardar")
const botonNueva = document.getElementById("botonCrear")
let empleados = [
    {
        cargo: "Dr.",
        nombre: "Wilson",
        apellido: "Bernal",
    }
];

function listarEmpleados() {
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
}

function enviarDatos(evento){
    evento.preventDefault();
    const datos = {
        cargo : cargo.value,
        nombre : nombre.value,
        apellido : apellido.value,
    };
    const accion = botonGuardar.innerHTML;
    switch(accion){
        case "Editar" :
            empleados[indice.value] = datos;
            break;
        default:
            empleados.push(datos);
            break;    
    }
    
    listarEmpleados();
    resetModal();
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
    return function cuandoClickEliminar(){
        empleados = empleados.filter((empleado,indiceEmpleado)=>indiceEmpleado !== index);
        listarEmpleados();
    }
}

listarEmpleados();
form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;