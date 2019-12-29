import React, {Component, useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class HeonModalParamSys extends Component {


constructor(props) {
    super(props);



    this.state = {
        show: false,
        data: this.props.data,
        nom: this.props.data.name,
        ip: this.props.data.ip
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.myChangeHandler = this.myChangeHandler.bind(this)


}

    handleClose(){

        this.setState({
            show: false

        })

       var data = { ... this.state.data}
        data.name = this.state.nom
        data.ip = this.state.ip

        this.props.onChange(data)

    }

    handleShow(){
        this.setState({show: true})
    }

    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render() {
    //console.log(this.props.data)
        var data = { ... this.state.data}
        return (
            <>
                <button className="btn" onClick={this.handleShow}>
                    <span className="fa fa-edit"></span>
                </button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.nom}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nom de la lumière</Form.Label>
                                <Form.Control type="string" placeholder="Nom de la lumière" name="nom" onChange={this.myChangeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Label>Adresse IP</Form.Label>
                                <Form.Control value={this.state.ip} type="string" placeholder="IP" name="ip" onChange={this.myChangeHandler}/>
                            </Form.Group>


                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                        </Form>




                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={this.handleClose}>
                            Fermer
                        </button>
                        <button variant="primary" onClick={this.handleClose}>
                            Sauvegarder
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        )

    }


}


export default HeonModalParamSys