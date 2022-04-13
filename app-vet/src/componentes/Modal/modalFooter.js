import React from "react";
import "./modalFooter.css";

function ModalFooter() {
    return (
        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
            >
                Cerrar
            </button>
            <button
                type="button"
                id="btn-guardar"
                className="btn btn-primary"
                data-bs-dismiss="modal"
            >
                Crear
            </button>
        </div>
    );
}

export default ModalFooter;
