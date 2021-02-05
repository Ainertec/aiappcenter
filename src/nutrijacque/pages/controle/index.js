import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar';
import CreateCategory from './categoria';
import CreateIten from './item';
import ListIten from './item/opcao';
import ListCategory from './categoria/opcao';
import UserUpdate from './user/index';

import BuildIcon from '@material-ui/icons/Build';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


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
                                <PlaylistAddIcon /> Criar categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(1)}>
                                <ListAltIcon /> Opções de categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(2)}>
                                <AddShoppingCartIcon /> Criar item
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(3)}>
                                <ShoppingCartIcon /> Opções de item
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => menu(4)}>
                                <BuildIcon /> Opções de conta
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <main style={{marginTop:'5vh'}}>
                            {posicaoMenu == 0 && <CreateCategory dado={{tipo:'cadastrar'}} />}
                            {posicaoMenu == 1 && <ListCategory />}
                            {posicaoMenu == 2 && <CreateIten dado={{tipo:'cadastrar'}} />}
                            {posicaoMenu == 3 && <ListIten />}
                            {posicaoMenu == 4 && <UserUpdate />}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}