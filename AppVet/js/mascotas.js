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
const url = "https://veterinaria-backend-liart-one.vercel.app/mascotas";
let mascotas = [];

async function listarMascotas() {
    try{
        const respuesta = await fetch(url);
        const mascotasDelServer = await respuesta.json();
        if(Array.isArray(mascotasDelServer)) {
            mascotas = mascotasDelServer;
        }
        if(mascotas.length > 0) {
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
            return;
        }
        listaMascotas.innerHTML = `<tr>
            <td colspan="7" class="lista-vacia">No hay mascotas</td>
        </tr>`;
    } catch (error){
        $(".alert").show();
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
        $(".alert").show();
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
    const urlEnvio = `${url}/${index}`;
    return async function cuandoClickEliminar(){
        try {
            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
            }); 
            if (respuesta.ok) {
                listarMascotas();
            }       
        } catch (error) {
            $(".alert").show();
        }       
    };
}

listarMascotas();

form.onsubmit = enviarDatos;
botonGuardar.onclick = enviarDatos;
botonNueva.onclick = resetModal;