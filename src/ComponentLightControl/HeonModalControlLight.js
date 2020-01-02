import React, {Component, Fragment} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LigneLight from '../ComponentParamSys/LigneLight'
import LightControlLine from './LightControlLine'


class HeonModalControlLight extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <Modal show={this.props.show} onHide={this.props.onHide} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title >Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    BODY
                    <LightControlLine/>

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