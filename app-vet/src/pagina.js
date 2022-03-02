import React from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
//import Modal from "./componentes/modal";

function Mascotas () {
    return (<div className="container">
        <Nav />
        <ActionsMenu />
        <div className="container">
            <Tabla />
            
        </div>
    </div>
    )
}

export default Mascotas;

