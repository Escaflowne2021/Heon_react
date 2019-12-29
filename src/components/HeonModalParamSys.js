import React, {Component, useState} from "react";
import Modal from 'react-bootstrap/Modal'


class HeonModalParamSys extends Component {


constructor(props) {
    super(props);



    this.state = {
        show: false
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)


}

    handleClose(){

        this.setState({show: false})
    }

    handleShow(){
        this.setState({show: true})
    }

    render() {
        return (
            <>
                <button className="btn" onClick={this.handleShow}>
                    <span className="fa fa-edit"></span>
                </button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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