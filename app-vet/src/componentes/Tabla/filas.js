import React from "react";
import Encabezado from "./encabezado";

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
                        <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger eliminar"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
        </tr>
    )
}

export default Fila;