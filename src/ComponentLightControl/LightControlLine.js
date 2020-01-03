import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import REST from "../components/HeonRESTservice"
import {HuePicker} from 'react-color'


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
                {data.numero} - {data.id}

                <HuePicker color={color} onChange={this.handleChangeComplete}/>
            </div>

        );
    }


    handleChangeComplete(color) {
        this.setState({color: color.rgb});
        Object.values(this.state.data.data).map((pixel) => {
                pixel.r = this.state.color.r
                pixel.g = this.state.color.g
                pixel.b = this.state.color.b

            }
        )

        REST.ModifHeon(this.state.data)
    }

}


export default LightControlLine