import React from "react";
import "./modalHeader.css";

function ModalHeader({ cambiarModal = () => {} }) {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
                Nueva Mascota
            </h5>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={cambiarModal}
            ></button>
        </div>
    );
}

export default ModalHeader;
