const listaConsultas = document.getElementById("lista-consultas");
const url = "http://localhost:8000/consultas"
let consultas = [];

async function listarConsultas() {
    try {
        const respuesta = await fetch(url);
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
        }    
    } catch (error) {
        
    }
}

listarConsultas();