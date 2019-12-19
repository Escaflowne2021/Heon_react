import React from "react";

const HeonLight = ({id, nom, nblight, data}) => {
    return (
        <button
            type = "button"
            className = "btn btn-primary">
            {nom} <span className = "badge badge-light" > {nblight} </span>
        </button>
    )
    console.log(data)

}

export default HeonLight;


