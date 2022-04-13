import React from "react";
import ModalHeader from "./modalHeader";
import ModalFooter from "./modalFooter";
import Input from "../Input";
import Select from "../Select";
import "./modal.css";

function Modal({ cambiarModal = () => {} }) {
    return (
        <>
            <div
                className="modal"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal} />
                        <div className="modal-body">
                            <form id="form">
                                <div className="form-row">
                                    <Select
                                        options={[
                                            {
                                                valor: "Perro",
                                                etiqueta: "Perro",
                                            },
                                            { valor: "Gato", etiqueta: "Gato" },
                                            { valor: "Otro", etiqueta: "Otro" },
                                        ]}
                                        nombreCampo="Especie"
                                    />
                                    <div className="col">
                                        <Input
                                            tipo="text"
                                            nombreCampo="Nombre"
                                        />
                                    </div>
                                    <div className="col">
                                        <Input tipo="text" nombreCampo="Raza" />
                                    </div>
                                    <div className="col">
                                        <Input tipo="text" nombreCampo="Edad" />
                                    </div>
                                    <div className="col">
                                        <Input
                                            tipo="text"
                                            nombreCampo="Dueño"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <ModalFooter cambiarModal={cambiarModal} />
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal;
