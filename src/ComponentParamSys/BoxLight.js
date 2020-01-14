import React, {Component} from "react";
import "./Box.scss"


class BoxLight extends Component {


    constructor(props) {
        super(props);
        this.state = {
            class: "box",
            selected: this.props.setBoxSelected,
            selectedByMe: this.props.selectedByMe
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {

        return {
            selected: nextProps.setBoxSelected,
            selectedByMe: nextProps.selectedByMe
        };
    }

    render() {

        let coord = {...this.props.coord}
        return (
            <div className={this.getClassname()}
                 onClick={
                     () => {
                         this.handleClick(coord)
                     }}>
                {this.props.num}
            </div>
        )
    }

    getClassname = () => {
        //console.log (this.props.num + " / " + this.props.setBoxSelected+ " / "+this.state.selected)
        var c = this.state.selected ? (this.state.selectedByMe ? "selected box" : "notme box") : "box"
        //var c = this.state.selectedByMe ? c : "notme box"
        //console.log(this.props.num + " / " + this.props.setBoxSelected + " / " + " / "+this.state.selectedByMe+ " / "+c)

        return c
    }

    handleClick = (coord) => {
        //console.log("clic")
        if (this.state.selectedByMe || !this.state.selected) {
            var isSelected = !Boolean(this.state.selected)
            var num = this.props.num
            this.props.changeState(coord, isSelected, num)
            //console.log(isSelected)
        }
        //this.setState(prevState => ({ selected: !prevState.selected}))

    }




}

export default BoxLight