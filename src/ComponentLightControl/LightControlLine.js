
import Button from "react-bootstrap/Button";
import React, {Component} from "react";
import REST from "../components/HeonRESTservice"


class LightControlLine extends Component {



    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>TEST
                <Button onClick={() => {
                    REST.ModifHeon("eee")
                }}></Button>
            </div>

        );
    }
}


export default LightControlLine