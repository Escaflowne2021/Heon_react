import React, {Component} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton'
import "./LineLightGraph.scss"


class LineGraphLight extends Component {



    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            BoxSelected: this.props.setBoxSelected,
            DataBoxSelected: this.props.DataBoxSelected
        }




        this.handleClick = this.handleClick.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        //console.log(nextProps)
        return {
            BoxSelected: nextProps.setBoxSelected,
            DataBoxSelected: nextProps.DataBoxSelected
        };
    }


    render() {

        var t = "light noSelected"
        if (this.props.setSelected == this.props.data.id){
            t = "light Selected"
        }

        return(
            <div  className={t} onClick={() => this.handleClick()}>lumiere {this.props.data.numero} {this.props.data.id} - {this.state.BoxSelected} </div>
        )
    }

    handleClick = () => {
        this.setState(prevState => ({ selected: !prevState.selected}))
        this.props.onChangeSelected(this.props.data.id)
    }





}

export default LineGraphLight