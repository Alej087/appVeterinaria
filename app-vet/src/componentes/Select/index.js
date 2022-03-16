import React from "react";
import "./select.css"

function Select (){
    return (
        <div className="col">
            <select id="especie" className="form-select" aria-label="Default select example">
                <option selected>Especie</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Otro</option>
            </select>
        </div>
    )
}

export default Select;