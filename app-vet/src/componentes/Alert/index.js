import React from "react";
import "./alert.css";

function Alert({ alertSwitch = () => {} }) {
    return (
        <div className="alert alert-danger alert-dismissible" role="alert">
            <svg
                className="bi flex-shrink-0 me-2"
                width="24"
                height="24"
                role="img"
                aria-label="Warning:"
            >
                <use xlinkHref="#exclamation-triangle-fill" />
            </svg>
            <strong>Holy guacamole!</strong> Algo salió mal, por favor vuelve a
            intentarlo.
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={alertSwitch}
            ></button>
        </div>
    );
}

export default Alert;
