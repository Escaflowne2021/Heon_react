import React, {Component} from "react";
import "./GraphGrid.scss"
import Box from "./Box";
import Button from 'react-bootstrap/Button'
import {BoxContext} from "./BoxContext";
import withREST from "../hoc/withREST";
import VirtualLight from "./VirtualLight";



class LightVirtuelGraph extends Component {

    static contextType = BoxContext;

    constructor(props) {
        super(props);

        this.state = {
            color:0, //coouler de départ
            colorById: [], //stocke les couleurs de chaque lumiere
            id_selected: "",
            id_virtual_actif:"",
            box_selected_by_light: [],
            data : this.props.data

        }
        this.handleClickLightVirtual = this.handleClickLightVirtual.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        return {
            data: nextProps.data,

        };
    }

    render() {

        const data = { ... this.state.data}

        //console.table(data)
        const virtualLight = Object.values(data.data)
            .filter(light => light.type =="VirtualLight")
            .map(light => {
                return(
                    <VirtualLight id={light.id}
                                  id_virtual_actif={this.state.id_virtual_actif}
                                  onClick={()=>this.handleClickLightVirtual(light.id)}/>
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
                        <Button className="btn btn-success" onClick={()=>this.props.AddHeon(data.id,undefined, true)}>
                            Create Virtual Light

                        </Button>
                        {virtualLight}
                    </div>
                </div>

            </div>

        )
    }

    handleClickLightVirtual = (id) => {
        const temp = Object.values(this.state.data.data).find(light => light.id == id)
            this.setState({id_virtual_actif:id,box_selected_by_light : temp.dataV})
        console.table(temp)
    }




    DrawGrid = () => {

        if (this.context.BoxSelected != null) {
            var liste = []

            let Y = 10
            let X = 10
            //console.table(this.context.BoxSelected)
            for (let y = 0; y < Y; y++) {
                for (let x = 0; x < X; x++) {
                    let numero = y * Y + x + 1
                    let rst = Object.values(this.context.BoxSelected).find(a => a.num == numero)
                    var color = ""
                    var id = ""
                    var isSelected = false
                    if (rst != null && rst.isSelected){
                        isSelected = this.isSelected(rst.id)
                        color = this.getColorsbyId(rst.id)
                        id=rst.id

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

     arrayRemove(arr, value) {

        return arr.filter(function(ele){
            return ele != value;
        });

    }

    isSelected(id){
        var temp = Object.values(this.state.box_selected_by_light).find(a => a.id_light == id )
        return temp != null;

    }

    handleClickBox = (value) => {
        this.setState({id_selected:value})
        var temp = [...this.state.box_selected_by_light]
        if (this.state.id_virtual_actif != null){
/*

            var selec = Object.values(temp).find(a => a.id_lightVirtual == this.state.id_virtual_actif && a.id_light == value)
            console.log(selec)
            if (selec == null){
                selec = {id_lightVirtual:this.state.id_virtual_actif,
                    id_light : value}
                     temp = [...this.state.box_selected_by_light, selec]
*/
            var selec = Object.values(temp).find(a =>  a.id_light == value)
            console.log(selec)
            if (selec == null){
                selec =  {id_light: value}
                temp = [...this.state.box_selected_by_light, selec]



            } else {
                temp = this.arrayRemove(temp, selec)

            }

        }
        this.setState({box_selected_by_light: temp})
        //console.table(temp)
        this.saveinData(value, temp)

    }

    saveinData = (id,data) => {
        var datastate = { ... this.state.data}
        var t = Object.values(datastate.data).find(light => light.id == this.state.id_virtual_actif)
        t.dataV = data
        //console.table(datastate)
        console.table(t)
        this.setState({data:datastate})
        this.props.ModHeon(t)
    }

    getColorsbyId = (id) => {
        var rst = Object.values(this.state.colorById).find(rst => rst.id === id)

        if (rst == null) {

            var ColorCode = {
                h:this.state.color,
                s:60,
                l:80}
            //console.table(ColorCode)
            const t = {id: id, color: ColorCode}
            this.setState({colorById: [...this.state.colorById, t],color:this.state.color+55})
            return t.color
        } else {

            return rst.color
        }

    }
}

const WrappedComponent = withREST(LightVirtuelGraph)

export default WrappedComponent