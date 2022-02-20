import React from "react";
import Nav from "./componentes/nav";
import ActionsMenu from "./componentes/actionsMenu";
import Tabla from "./componentes/tabla";
import Modal from "./componentes/modal";

function Mascotas () {
    return (<div className="container">
        <Nav />
        <ActionsMenu />
        <div className="container">
            <Tabla />
            <Modal />
        </div>
    </div>
    )
}

export default Mascotas;

