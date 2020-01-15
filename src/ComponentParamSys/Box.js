import React from "react";
import "./Box.scss"


const Box = (props) => {
    var borderstyle
    //console.table(props)
    if (props.isSelected) {
        borderstyle = "5px solid"
    }

    return (
        <div className="box"
             style={{backgroundColor: props.color,border:borderstyle}}
             onClick={()=>props.onClick(props.id)}>
            {props.numero} </div>
    )
}

export default Box