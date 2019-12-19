import React from "react";

const HeonLight = ({id, nom, nblight}) => {
    return (
        <button
            type = "button"
            className = "btn btn-primary">
            {nom} <span className = "badge badge-light" > {nblight} </span>
        </button>
    )

}

export default HeonLight;


