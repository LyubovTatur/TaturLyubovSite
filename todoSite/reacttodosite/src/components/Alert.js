import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert.visible) return null;

    return (
        <div className={`alert alert-${alert.type || 'warning'}  alert-dismissible`}  >
            &nbsp;{alert.text}
            <button type="button" onClick={hide} className="btn-close"  aria-label="Close">
            </button>
        </div>)
}