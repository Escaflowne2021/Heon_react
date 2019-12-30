import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";



const LigneLight = (props) => {

    return (
        <Container>
            <Row>
                <Col xs={9}>
                    <div  className="container-fluid"> Lumiere {props.heon.numero} - id:{props.heon.id} - nb Pixel {props.heon.data.length}</div>

                </Col>
                <Col>
                    <Button variant="outline-dark" size="sm" onClick={() => props.addPixel(props.heon.id)}>
                        <span className="fa fa-plus"></span>
                    </Button>
                    <Button variant="outline-dark" size="sm">
                        <span className="fa fa-minus"></span>
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
