import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";
import withREST from "../hoc/withREST";


const LigneLight = (props) => {

    var LastPixel = props.heon.data[props.heon.data.length - 1]

    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <div> Lumiere {props.heon.numero} - id:{props.heon.id}  </div>
                </Col>
                <Col className="btext-center mx-auto">
                    <Button className="d-inline p-2" variant="outline-dark" size="sm"  onClick={() => props.AddHeon(props.heon.id,10)}>
                    +10
                    </Button>
                    <Button className="d-inline p-2" variant="outline-dark" size="sm" onClick={() => props.AddHeon(props.heon.id)}>
                        <span className="fa fa-plus"></span>
                    </Button>
                    <div className="d-inline p-2">nb Pixel {props.heon.data.length}</div>
                    <Button className="d-inline p-2" variant="outline-dark" size="sm" onClick={() => props.SupHeon(LastPixel.id)}>
                        <span className="fa fa-minus"></span>
                    </Button>
                    <Button className="d-inline p-2" variant="outline-dark" size="sm" onClick={() => props.SupHeon(props.heon.id,10)}>
                        -10
                    </Button>

                </Col>
                <Col xs={1} className="text-center">
                    <Button variant="outline-danger" size="sm"  onClick={() => props.SupHeon(props.heon.id)}>
                        <span className="fa fa-remove"/>
                    </Button>

                </Col>


            </Row>
        </Container>


    )
}

const WrappedComponent = withREST(LigneLight)

export default WrappedComponent


/*
const BooksList = ({books}) => {
    return (
        <ul>
            {books.map(book => {
                return <li>book</li>
            })}
        </ul>
    )
}*/
