import React from "react";
import {
    Container,
    Button,
    Form,
    Card,
    Image,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

import SecurityIcon from '@material-ui/icons/Security';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import NavBar from './navbar';

export default function Login() {
    const history = useHistory();
    const handleToControl = () => {
        alert('Bem vindo a área do administrador!')
        history.push("/nutricionistajacquelinethedim/controle");
    };
    
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Card border="info" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <Row className="justify-content-center">
                        <Image style={{ opacity: 1, width: '18vw', marginTop: '2vh', borderRadius: 20, boxShadow: "5px 5px 5px black" }} src="https://i.ibb.co/ZKhr9x3/download.png" />
                    </Row>
                    <Card.Body>
                        <h5 style={{ marginBottom: '2vh', textAlign: 'center' }}><SecurityIcon /> Acessar Conta Administrador</h5>
                        <Row className="justify-content-center">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control type="text" className="mb-2" placeholder="Entre com o usuário." />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Entre com a senha." />
                                </Form.Group>
                                <Button onClick={handleToControl} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="primary" size="lg" block>
                                    <VpnKeyIcon /> Entrar
                                </Button>
                                <a href="#">Esqueceu a senha?</a>
                            </Form>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}