import React from "react";

function Modal () {
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nueva Mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="form">
                            <input type="hidden" id="indice"/>
                            <div className="form-row">
                                <div className="col">
                                    <select id="especie" className="form-select" aria-label="Default select example">
                                        <option selected>Especie</option>
                                        <option>Perro</option>
                                        <option>Gato</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
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