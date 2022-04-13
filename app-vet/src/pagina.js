import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
        };
    }

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal });
    };

    // el método render siempre debe ir de último

    render() {
        return (
            <div className="container">
                <Nav />
                <ActionsMenu cambiarModal={this.cambiarModal} />
                <div className="container">
                    <Tabla />
                    {this.state.mostrarModal && (
                        <Modal cambiarModal={this.cambiarModal} />
                    )}
                </div>
            </div>
        );
    }
}

export default Pagina;
