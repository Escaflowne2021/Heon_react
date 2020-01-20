import React, {Component, Fragment} from "react";
import Modal from 'react-bootstrap/Modal';
import LightControlLine from './LightControlLine'


class HeonModalControlLight extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        var data = { ... this.props.data}

        const liste = Object.values(data.data)
            .filter(light => light.visible)
            .sort((a,b)=>(parseInt(a.numero) - parseInt(b.numero)))
            .map(light => (

            <LightControlLine key={light.id} data={light}/>
        ))


        return(
            <Modal show={this.props.show} onHide={this.props.onHide} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title >{data.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    BODY
                    {liste}

                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={this.props.onHide}>
                        Fermer
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }


    }


    export default HeonModalControlLight