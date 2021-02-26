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
import PagUploadFotoControle from './pagUploadFoto';

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
                            <ListGroup.Item action onClick={() => setNavegacao(6)}>
                                <img style={{height:'3vh', borderRadius:5}} src="data:image/png;base64,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" /> Opções de foto
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
                            {navegacao == 6 && <PagUploadFotoControle />}
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}