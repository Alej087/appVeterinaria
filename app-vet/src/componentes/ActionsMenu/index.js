import React, {useState} from "react";
import "./actionsMenu.css"
import Alert from "../Alert"

function ActionsMenu () {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = () => setMostrarAlerta(!mostrarAlerta);
    return (
        <div className="actions-menu">
            <h1>Mascotas</h1>
            <div className="actions-menu-content">
                <button type="button" id="botonCrear" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={alertSwitch}> Nueva
                </button>
                {mostrarAlerta && <Alert alertSwitch={alertSwitch}/>}
            </div>
        </div>
    )
}

export default ActionsMenu;