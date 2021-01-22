import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar';
import CreateCategory from './categoria/cadastrar';
import CreateIten from './item/cadastrar';

export default function Control() {
    const [posicaoMenu, setMenu] = useState(0);

    function menu(opcaoDeNavegacao){
        setMenu(opcaoDeNavegacao);
    }

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <h3 style={{textAlign:'center', marginTop: '5vh'}}>Menu</h3>
                        <ListGroup>
                            <ListGroup.Item action onClick={() => menu(0)}>
                                Criar categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(1)}>
                                Opçoes de categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(2)}>
                                Criar item
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(3)}>
                                Opçoes de item
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <main style={{marginTop:'5vh'}}>
                            {posicaoMenu == 0 && <CreateCategory/>}
                            {posicaoMenu == 1 && <>Teste1</>}
                            {posicaoMenu == 2 && <CreateIten/>}
                            {posicaoMenu == 3 && <>Teste3</>}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}