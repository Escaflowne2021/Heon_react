import React, {Component} from "react";
import BoxLight from "./BoxLight";
import "./GraphGrid.scss"

class LightVirtuelGraph extends Component{

    constructor(props) {
        super(props);

        this.state= {
            BoxSelected: this.props.BoxSelected
        }
    }

    render() {
        console.log(this.props.BoxSelected)



        return(
            <div className="d-flex flex-row">

                <div className="grid">
                    {this.DrawGrid()}
                </div>
                <div className="d-flex flex-column">
                    Lumiere
                </div>

            </div>

        )
    }

    DrawGrid = () => {
        if (this.props.BoxSelected != null)
       { var liste = []

        let Y = 10
        let X = 10

        for (let y = 0; y < Y; y++) {
            for (let x = 0; x < X; x++) {
                let numero = y * Y + x + 1
                let rst = Object.values(this.props.BoxSelected).find(a => a.num == numero)
                var selec = false
                let selecByMe = true
                if (rst != null) {
                    selec = rst.isSelected
                    if (rst.id != this.state.id_of_light_selected) {
                        selecByMe = false
                    }
                    //console.log(rst)
                }
                liste.push(<BoxLight key={y * Y + x}
                                     num={y * Y + x + 1}

                                     coord={{x, y}}
                                     setBoxSelected={selec}
                                     selectedByMe={selecByMe}/>)
            }
        }

        return liste}
}
}

export default LightVirtuelGraph