import React from "react";
import "./Box.scss"


const Box = (props) => {
    var borderstyle,colorstyle
    var color = props.color
    colorstyle = 'hsl(' + color.h + ','+color.s+'%,'+color.l +'%)'
    //console.table(color)
    if (props.isSelected) {
        borderstyle = "solid 2px"
        colorstyle = 'hsl(' + color.h + ','+100 +'%,'+60 +'%)'

    }


    return (
        <div className="box"
             style={{backgroundColor: colorstyle,border:borderstyle}}
             onClick={()=>props.onClick(props.id)}>
            {props.numero} </div>
    )
}

export default Box