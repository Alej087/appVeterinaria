import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import { listarEntidad } from "./servicio";

class Pagina extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
        };
    }

    cambiarModal = () => {
        this.setState({ mostrarModal: !this.state.mostrarModal });
    };

    listar = async () => {
        const { entidad } = this.props;
        const entidades = await listarEntidad({ entidad });
        this.setState({ entidades });
    };

    componentDidMount() {
        this.listar();
    }
    // el método render siempre debe ir de último

    render() {
        const { titulo = "Página sin titulo" } = this.props;
        return (
            <div className="container">
                <Nav />
                <ActionsMenu cambiarModal={this.cambiarModal} titulo={titulo} />
                <div className="container">
                    <Tabla entidades={this.state.entidades} />
                    {this.state.mostrarModal && (
                        <Modal cambiarModal={this.cambiarModal} />
                    )}
                </div>
            </div>
        );
    }
}

export default Pagina;
