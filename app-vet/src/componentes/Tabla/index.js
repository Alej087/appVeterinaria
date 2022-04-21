import React, { useState } from "react";
import Encabezado from "./encabezado";
import Fila from "./filas";
import "./tabla.css";

function Tabla({ entidades = [] }) {
    const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas} />
            <tbody id="lista-mascotas">
                {entidades.map((entidad, index) => (
                    <Fila
                        key={`fila-${index}`}
                        index={index}
                        entidad={entidad}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Tabla;
