import React from "react";

function Tabla () {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Especie</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Raza</th>
                    <th scope="col">Dueño</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody id="lista-mascotas">
                    
            </tbody>
        </table>
    )
}

export default Tabla;