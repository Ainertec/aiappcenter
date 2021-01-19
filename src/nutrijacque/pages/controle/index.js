import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar';

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
                        <main style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', borderRadius:15, height:'80vh', padding:'3vw', marginTop:'2vh'}}>
                            {posicaoMenu == 0 && <>Teste</>}
                            {posicaoMenu == 1 && <>Teste1</>}
                            {posicaoMenu == 2 && <>Teste2</>}
                            {posicaoMenu == 3 && <>Teste3</>}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}