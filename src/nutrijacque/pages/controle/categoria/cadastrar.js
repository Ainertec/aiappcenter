import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateCategory() {
    const [nome, setNome] = useState('');

    function novoNome(entradaDeNome){
        setNome(entradaDeNome);
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw'}}>
                    <h5 style={{textAlign:'center'}}>Categoria</h5>
                    <Form>
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Cursos" onChange={(event) => novoNome(event.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Criar
                        </Button>
                    </Form>
                </Col>
                <Col xs={7} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh'}}>
                    <h3 style={{ textAlign: 'center', marginTop: '4vh' }}>{nome}</h3>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}