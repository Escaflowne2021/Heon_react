import React, {Component} from "react";
import "./GraphGrid.scss"
import BoxLight from "./BoxLight";
import LineGraphLight from "./LineGraphLight";

class LightGraphique extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id_of_light_selected: "",
            BoxSelected: [{}]


        }

    }

    render() {
        const listeLumiere = Object.values(this.props.data)
            .sort((a, b) => (parseInt(a.numero) - parseInt(b.numero)))
            .map(heon => {
                    return (
                        <LineGraphLight key={heon.id}
                                        setSelected={this.state.id_of_light_selected}
                                        value={heon.numero}
                                        data={heon}
                                        DataBoxSelected={this.state.BoxSelected}
                                        onChangeSelected={(value) => this.handleLightSelected(value)}/>
                    )

                }
            )

        var liste = []

        let Y = 10
        let X = 10

        for (let y = 0; y < Y; y++) {
            for (let x = 0; x < X; x++) {
                let numero = y *Y +x +1
                let rst =  Object.values(this.state.BoxSelected).find(a => a.num == numero && a.id == this.state.id_of_light_selected)

                var selec = false
                if (rst != null) {
                    //console.log(rst)
                    selec = rst.isSelected
                }
                liste.push(<BoxLight key={y * Y + x} num={y * Y + x + 1} changeState={this.handleBoxChange}
                                     coord={{x, y}} setBoxSelected={selec}/>)
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

        var trouve = false;

        Object.values(this.state.BoxSelected).map(box => {
            if (box.num == num && box.id == this.state.id_of_light_selected) {
                box.isSelected = isSelected
                trouve = true
            }
        })


        if (!trouve) {

            var box = {}
            box.num = num
            box.coord = coord
            box.isSelected = isSelected
            box.id = this.state.id_of_light_selected
            //liste.push(box)
            this.setState({BoxSelected: [...this.state.BoxSelected, box]})
        }

    }

    //Changement des lumieres est appuyée
    handleLightSelected = (id, BoxSelected) => {

        this.setState({id_of_light_selected: id})

    }

}

export default LightGraphique