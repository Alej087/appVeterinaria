import React from "react";
import ModalHeader from "./modalHeader";
import Select from "../Select";

function Modal () {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader />
                    <div className="modal-body">
                        <form id="form">
                            <div className="form-row">
                                <Select />
                                <div className="col">
                                    <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre"/>
                                </div>
                                <div className="col">
                                    <input type="text" id="raza" name="raza" className="form-control" placeholder="Raza"/>
                                </div>
                                <div className="col">
                                    <input type="text" id="edad" name="edad" className="form-control" placeholder="Edad"/>
                                </div>
                                <div className="col">
                                    <input type="text" id="dueno" name="dueno" className="form-control" placeholder="Dueño"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" id="btn-guardar" className="btn btn-primary" data-bs-dismiss="modal">Crear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;