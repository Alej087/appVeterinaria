import React from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons"
import "./botonAccion.css"

function BotonAccion ({tipo}) {
    return (
        <button type="button" className={classNames("btn", {"btn-info": tipo === "editar"},{ "btn-danger": tipo === "eliminar"})}>
            {tipo === "editar" && <FontAwesomeIcon icon={faEdit} />}
            {tipo === "eliminar" && <FontAwesomeIcon icon={faTrash} />}
        </button>
    );
}
export default BotonAccion;