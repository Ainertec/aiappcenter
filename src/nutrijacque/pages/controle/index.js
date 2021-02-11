import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigationControler } from '../../contexts/navigationControler';

import NavBar from './navbar';
import HomeControle from './home';
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
import HomeIcon from '@material-ui/icons/Home';


export default function Control() {
    const {
        navegacao,
        setNavegacao,
    } = useNavigationControler();

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <h3 style={{textAlign:'center', marginTop: '5vh'}}>Menu</h3>
                        <ListGroup>
                            <ListGroup.Item action onClick={() => setNavegacao(0)}>
                                <HomeIcon /> Início
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => setNavegacao(1)}>
                                <PlaylistAddIcon /> Criar categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => setNavegacao(2)}>
                                <ListAltIcon /> Opções de categoria
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => setNavegacao(3)}>
                                <AddShoppingCartIcon /> Criar item
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => setNavegacao(4)}>
                                <ShoppingCartIcon /> Opções de item
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => setNavegacao(5)}>
                                <BuildIcon /> Opções de conta
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <main style={{marginTop:'5vh'}}>
                            {navegacao == 0 && <HomeControle />}
                            {navegacao == 1 && <CreateCategory dado={{tipo:'cadastrar'}} />}
                            {navegacao == 2 && <ListCategory />}
                            {navegacao == 3 && <CreateIten dado={{tipo:'cadastrar'}} />}
                            {navegacao == 4 && <ListIten />}
                            {navegacao == 5 && <UserUpdate />}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}