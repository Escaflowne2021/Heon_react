import React, {Component, useState, Fragment} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LigneLight from '../ComponentParamSys/LigneLight'
import withREST from "../hoc/withREST";


class HeonModalParamSys extends Component {


constructor(props) {
    super(props);



    this.state = {
        show: false,
        data: this.props.data,
        nom: this.props.data.name,
        ip: this.props.data.ip
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.handleSaveAndClose = this.handleSaveAndClose.bind(this)



}

   static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(prevState.data.data[0].id +"/"+ prevState.data.data[1].id)
        return {
            data: nextProps.data,
        };
    }

    handleSaveAndClose(){

        this.setState({
            show: false

        });

        var data = { ...this.state.data};
        data.name = this.state.nom;
        data.ip = this.state.ip;

         this.props.ModHeon(data)

    }

    handleClose(){
        this.setState({
            show: false

        });
    }

    handleShow(){
        this.setState({show: true})
    }

    myChangeHandler = (event) => {

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    };


    render() {


        var data = { ...this.state.data};

         const listeLumiere = Object.values(data.data)
             .sort((a,b)=>(parseInt(a.numero) - parseInt(b.numero)))
             .map(heon => {

                return(
                    <LigneLight key={heon.id}
                                heon={heon}
                                RefreshSys={this.props.RefreshSys}

                    />
                )
         }
         )

        return (
            <Fragment>
                <button className="btn" onClick={this.handleShow}>
                    <span className="fa fa-edit"></span>
                </button>


                <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
                    <Modal.Header closeButton>
                        <Modal.Title >{this.state.nom}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>




                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Nom de la lumière</Form.Label>
                                <Form.Control defaultValue={this.state.nom} type="string" placeholder="Nom de la lumière" name="nom" onChange={this.myChangeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicIP">
                                <Form.Label>Adresse IP</Form.Label>
                                <Form.Control defaultValue={this.state.ip} type="string" placeholder="IP" name="ip" onChange={this.myChangeHandler}/>
                            </Form.Group>


                            <Form.Group controlId="formBasiLight">
                                <Form.Label>Lumière</Form.Label>

                                {listeLumiere}
                                <Button className="btn btn-success" onClick={() => this.props.AddHeon(this.state.data.id).then((value) => this.props.RefreshSys(value))} >
                                    <span className="fa fa-plus"></span>
                                </Button>
                            </Form.Group>

                        </Form>




                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" onClick={this.handleClose}>
                            Fermer
                        </button>
                        <button variant="primary" onClick={this.handleSaveAndClose}>
                            Sauvegarder
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )

    }


}

const WrappedComponent = withREST(HeonModalParamSys)

export default WrappedComponent