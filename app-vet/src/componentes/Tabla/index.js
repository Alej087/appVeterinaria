import React, {useState} from "react";
import Encabezado from "./encabezado";
import Fila from "./filas";
import "./tabla.css"

function Tabla () {
    const [mascotas, setMascotas] = useState([
        {especie: "Gato", nombre: "Mittens0", edad: "6 años", raza: "Criollo", dueno: "Alejandro González"},
        {especie: "Gato", nombre: "Mittens0", edad: "6 años", raza: "Criollo", dueno: "Alejandro González"},
    ]);
    const columnas = mascotas.length > 0 ? Object.keys(mascotas[0]) : [];
    return (
        <table className="table table-hover">
            <Encabezado columnas={columnas}/>
            <tbody id="lista-mascotas">
                    {" "}
                    {mascotas.map((mascota, index)=> (
                        <Fila mascota={mascota} index={index} />
                    ))}
            </tbody>
        </table>
    )
}

export default Tabla;