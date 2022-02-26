import React from "react";
import "./actionsMenu.css"

function ActionsMenu () {
    return (
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" id="botonCrear" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> Nueva
                </button>
                <div className="alert alert-danger alert-dismissible" role="alert">
                    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
                    <strong>Holy guacamole!</strong> Algo salió mal, por favor vuelve a intentarlo.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}

export default ActionsMenu;