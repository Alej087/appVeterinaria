import React from "react";
import "./select.css";

function Select({ options = [], nombreCampo = "vacio" }) {
    return (
        <div className="col">
            <select
                id="especie"
                className="form-select"
                aria-label="Default select example"
            >
                <option value="">Seleccione {nombreCampo}</option>
                {options.map(({ valor, etiqueta }, index) => (
                    <option
                        key={`${nombreCampo}-${index}-${valor}-${etiqueta}`}
                        value={valor}
                    >
                        {etiqueta}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
