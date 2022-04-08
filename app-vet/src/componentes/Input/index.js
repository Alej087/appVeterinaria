import React from "react";
import "./input.css";

function Input({ tipo = "text", nombreCampo }) {
    return (
        <input
            type={tipo}
            id={nombreCampo}
            name={nombreCampo}
            className="form-control"
            placeholder={nombreCampo}
        />
    );
}

export default Input;
