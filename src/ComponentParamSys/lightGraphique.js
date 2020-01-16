import React, {Component} from "react";
import "./GraphGrid.scss"
import BoxLight from "./BoxLight";
import LineGraphLight from "./LineGraphLight";
import {BoxContext} from "./BoxContext";

class LightGraphique extends Component {

    static contextType = BoxContext;

    constructor(props) {
        super(props);
        this.state = {
            id_of_light_selected: "",
            //BoxSelected: this.context.BoxSelected


        }

        this.handleBoxChange = this.handleBoxChange.bind(this)


    }

    render() {
        console.table(this.context.BoxSelected)

        const listeLumiere = Object.values(this.props.data)
            .sort((a, b) => (parseInt(a.numero) - parseInt(b.numero)))
            .map(heon => {
                    return (
                        <LineGraphLight key={heon.id}
                                        setSelected={this.state.id_of_light_selected}
                                        value={heon.numero}
                                        data={heon}
                                        DataBoxSelected={this.context.BoxSelected}
                                        onChangeSelected={(value) => this.handleLightSelected(value)}/>
                    )

                }
            )

        var liste = []

        let Y = 10
        let X = 10

        for (let y = 0; y < Y; y++) {
            for (let x = 0; x < X; x++) {
                let numero = y * Y + x + 1
                let rst = Object.values(this.context.BoxSelected).find(a => a.num == numero)
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
                                     changeState={this.handleBoxChange}
                                     coord={{x, y}}
                                     setBoxSelected={selec}
                                     selectedByMe={selecByMe}/>)
            }
        }


        return (
            <div className="d-flex flex-row">

                <div className="grid">
                    {liste}
                </div>
                <div className="d-flex flex-column">
                    {listeLumiere}
                </div>

            </div>

        )
    }

    //Changement des lumieres est appuyée
    handleBoxChange = (coord, isSelected, num) => {
        this.context.addBoxSelected(coord,isSelected,num,this.state.id_of_light_selected)
    }

    //Changement des lumieres est appuyée
    handleLightSelected = (id, BoxSelected) => {
        this.setState({id_of_light_selected: id})

    }






}

export default LightGraphique
