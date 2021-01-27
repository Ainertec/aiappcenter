import React from "react";
import {
    Container,
    Media,
    Card,
    Button,
    Accordion,
    Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';

import NavBar from './navbar';

export default function ItemSelected() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Media style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', boxShadow: "5px 5px 5px black", borderRadius: 10 }}>
                    <img
                        style={{ width: '20vw', borderRadius: 10 }}
                        className="mr-3"
                        src="https://i.ibb.co/wrDtZ1d/download-1.jpg"
                    />
                    <Media.Body className="mr-3">
                        <h5 style={{ marginBottom: '5vh' }}><u>Novo Curso de Emagrecimento</u></h5>
                        <p>Categoria: Curso</p>
                        <p>Criado em: 2020-02-23</p>
                        <h3 style={{ color: 'red', marginBottom: '5vh' }}>R$250.00</h3>
                        <Button onClick={() => { alert('Aqui vc será direcionado para o pagamento!(integração com o link do outro sistema.)') }} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="warning" size="lg" block>
                            <ShoppingCartIcon /> Comprar
                        </Button>
                    </Media.Body>
                </Media>
                <Card border="secondary" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <Card.Header><DescriptionIcon /> Descrição</Card.Header>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center' }}>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Row border="secondary" className="justify-content-center" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <iframe style={{
                        width: '70vw',
                        height: '50vh',
                        borderRadius: 10,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    }} src="https://www.youtube.com/embed/-3s_YFDXHNY" />
                </Row>
                <Accordion defaultActiveKey="0" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10, marginBottom: '10vh' }} >
                    <Card border="info">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <CommentIcon /> Comentários!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                                <h6>Aldair</h6>
                                <p>"Hello! I'm another body"</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
}