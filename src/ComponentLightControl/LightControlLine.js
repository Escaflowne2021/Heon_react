import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import {HuePicker} from 'react-color'
import withREST from "../hoc/withREST";


class LightControlLine extends Component {


    constructor(props) {
        super(props);

        this.state = {
            color: '#fff',
            data: this.props.data
        }

        this.handleChangeComplete = this.handleChangeComplete.bind(this)

    }


    render() {

        var data = {...this.state.data}
        var color = {...this.state.color}

        return (
            <div>
                {data.name} - {data.numero} - {data.id}

                <HuePicker color={color} onChange={this.handleChangeComplete}/>
            </div>

        );
    }


    handleChangeComplete(color) {

       /* this.setState({color: color.rgb});
        Object.values(this.state.data.data).map((pixel) => {
                pixel.r = this.state.color.r
                pixel.g = this.state.color.g
                pixel.b = this.state.color.b

            }
        )*/
        //this.props.ModHeon(this.state.data)
        this.props.SetLight(this.props.data.id,color.rgb.r,color.rgb.g,color.rgb.b)

    }

}

const WrappedComponent = withREST(LightControlLine)
export default WrappedComponent