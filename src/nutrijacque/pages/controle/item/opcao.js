import React, { useState, useEffect } from "react";
import {
    Container,
    InputGroup,
    Button,
    FormControl,
    Row,
    Col,
    ListGroup,
    Image,
    Badge,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Api from "../../../services/api";


export default function ListIten() {

    return (
        <Container fluid>
            <h4 style={{textAlign:'center', marginBottom:'3vh'}}>Listagem de produtos</h4>
            <Row>
                <Col xs={12} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'75vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup>
                            <FormControl
                                placeholder="Exemplo: curso de emagrecimento"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-info">Buscar</Button>
                                <Button variant="outline-info">Exibir todos</Button>
                            </InputGroup.Append>
                        </InputGroup>

                        <ListGroup style={{marginTop:'5vh'}}>
                            <ListGroup.Item variant="warning" action href="#link1">
                                <Row>
                                    <Col xs={3}>
                                        <Image src="https://i.ibb.co/wrDtZ1d/download-1.jpg" style={{maxHeight:'10vh'}} roundedCircle />
                                    </Col>
                                    <Col xs={6}>
                                        <strong><u>Curso de emagrecimento</u></strong>
                                    </Col>
                                    <Col xs={3}>
                                        <Badge variant="success">R$ 250.00</Badge>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="#link1">
                                <Row>
                                    <Col xs={3}>
                                        <Image src="https://i.ibb.co/wrDtZ1d/download-1.jpg" style={{maxHeight:'10vh'}} roundedCircle />
                                    </Col>
                                    <Col xs={6}>
                                        <strong><u>Curso de emagrecimento</u></strong>
                                    </Col>
                                    <Col xs={3}>
                                        <Badge variant="success">R$ 250.00</Badge>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning" action href="#link1">
                                <Row>
                                    <Col xs={3}>
                                        <Image src="https://i.ibb.co/wrDtZ1d/download-1.jpg" style={{maxHeight:'10vh'}} roundedCircle />
                                    </Col>
                                    <Col xs={6}>
                                        <strong><u>Curso de emagrecimento</u></strong>
                                    </Col>
                                    <Col xs={3}>
                                        <Badge variant="success">R$ 250.00</Badge>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}