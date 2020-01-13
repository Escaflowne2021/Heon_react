import React, {Component} from "react";
import "./Box.scss"


class BoxLight extends Component{


    constructor(props) {
        super(props);
        this.state = {
            class: "box",
            selected: this.props.setBoxSelected
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {

        return {
            selected: nextProps.setBoxSelected,
        };
    }

    render() {

        let coord = { ... this.props.coord}
        return(
            <div className={this.getClassname()}
                 onClick={
                     () => {this.handleClick(coord)}}>
                {this.props.num}
            </div>
        )
    }

    getClassname = () => {
        //console.log (this.props.num + " / " + this.props.setBoxSelected+ " / "+this.state.selected)
        var c =this.state.selected ?  "selected box " :  "box"
        return c
    }

    handleClick = (coord) => {
        console.log("clic")
        var  isSelected = !Boolean(this.state.selected)
        var num = this.props.num
        this.props.changeState(coord,isSelected,num)
        console.log(isSelected)
        //this.setState(prevState => ({ selected: !prevState.selected}))

    }


}

export default BoxLight