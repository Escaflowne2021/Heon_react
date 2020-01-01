import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";


const LigneLight = (props) => {

    var LastPixel = props.heon.data[props.heon.data.length - 1]

    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <div > Lumiere {props.heon.numero} - id:{props.heon.id}  </div>

                </Col>
                <Col className="btext-center">


                    <Button className="d-inline p-2" variant="outline-dark" size="sm" onClick={() => props.addPixel(props.heon.id)}>
                        <span className="fa fa-plus"></span>
                    </Button>
                    <div className="d-inline p-2">nb Pixel {props.heon.data.length}</div>
                    <Button className="d-inline p-2" variant="outline-dark" size="sm" onClick={() => props.removePixel(LastPixel.id)}>
                        <span className="fa fa-minus"></span>
                    </Button>

                </Col>
                <Col xs={1} className="text-center">
                    <Button variant="outline-danger" size="sm"  onClick={() => props.removeLight(props.heon.id)}>
                        <span className="fa fa-remove"/>
                    </Button>

                </Col>


            </Row>
        </Container>


    )
}

export default LigneLight


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
