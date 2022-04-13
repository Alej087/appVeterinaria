import React from "react";
import "./modalFooter.css";

function ModalFooter({ cambiarModal = () => {} }) {
    return (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={cambiarModal}
            >
                Cerrar
            </button>
            <button
                type="button"
                id="btn-guardar"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={cambiarModal}
            >
                Crear
            </button>
        </div>
    );
}

export default ModalFooter;
