import React from "react";
import BotonAccion from "../BotonAccion";

function Fila({mascota, index}) {
    return (
        <tr>
            <th scope="row">{index}</th>
                <td>{mascota.especie}</td>
                <td>{mascota.nombre}</td>
                <td>{mascota.edad}</td>
                <td>{mascota.raza}</td>
                <td>{mascota.dueno}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <BotonAccion tipo="editar" />
                        <BotonAccion tipo="eliminar" />
                    </div>
                </td>
        </tr>
    )
}

export default Fila;