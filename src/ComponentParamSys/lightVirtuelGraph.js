import React, {Component} from "react";
import "./GraphGrid.scss"
import Box from "./Box";
import Button from 'react-bootstrap/Button'
import {BoxContext} from "./BoxContext";
import withREST from "../hoc/withREST";
import divWithClassName from "react-bootstrap/cjs/divWithClassName";



class LightVirtuelGraph extends Component {

    static contextType = BoxContext;

    constructor(props) {
        super(props);

        this.state = {
            //BoxSelected: this.props.BoxSelected,
            colors: ["LightPink ", "LightSalmon", "LightSeaGreen"],
            colorById: [],
            id_selected: ""

        }
    }

    render() {

        const virtualLight = Object.values(this.props.data.data)
            .filter(light => light.type =="VirtualLight")
            .map(light => {
                return(
                    <div>{light.id}</div>
                )

            })
        //console.log(this.props.data)
        return (
            <div className="d-flex flex-row">

                <div className="grid">
                    {this.DrawGrid()}
                </div>
                <div className="d-flex flex-column">
                    <div className="container">
                        <Button className="btn btn-success" onClick={()=>this.props.AddHeon(this.props.data.id,undefined, true)}>
                            <span className="fa fa-plus"></span>
                        </Button>
                        {virtualLight}
                    </div>
                </div>

            </div>

        )
    }

    DrawGrid = () => {

        if (this.context.BoxSelected != null) {
            var liste = []

            let Y = 10
            let X = 10

            for (let y = 0; y < Y; y++) {
                for (let x = 0; x < X; x++) {
                    let numero = y * Y + x + 1
                    let rst = Object.values(this.context.BoxSelected).find(a => a.num == numero)
                    var color = ""
                    var id = ""
                    var isSelected = false
                    if (rst != null && rst.isSelected) {
                        color = this.getColorsbyId(rst.id)
                        //console.table(rst)
                        id = rst.id
                        isSelected = rst.id == this.state.id_selected
                    }
                    liste.push(<Box numero={y * Y + x + 1}
                                    id={id}
                                    color={color}
                                    isSelected={isSelected}
                                    onClick={(value) => this.handleClickBox(value)}
                    />)
                }
            }

            return liste
        }
    }
    handleClickBox = (value) => {
        this.setState({id_selected:value})
    }

    getColorsbyId = (id) => {
        var rst = Object.values(this.state.colorById).find(rst => rst.id === id)

        if (rst == null) {
            //const t = {id:id,color:this.state.colors[this.state.colorById.length]}

            var ColorCode = 'hsl(' + (Math.floor(Math.random() * 256)) + ',60%,80%)';
            console.table(ColorCode)
            const t = {id: id, color: ColorCode}
            this.setState({colorById: [...this.state.colorById, t]})
            return t.color
        } else {

            return rst.color
        }

    }
}

const WrappedComponent = withREST(LightVirtuelGraph)

export default WrappedComponent