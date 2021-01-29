import React, { useState, useEffect  } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Api from "../../../services/api";
import { useCategory } from "../../../contexts/category";

export default function CreateCategory() {
    const {
        name,
        setName,
        iniciarVariavelCategory,
    } = useCategory();


    async function cadastrarCategoria() {
        const category = {
          name,
          items:[]
        };
    
        //await setProgresso(true);
        await Api.post(`categorys`, category).then(response => {
          //notificacaoCadastroCliente();
        });
        //await setProgresso(false);
    
    }
    
    useEffect(() => {
        iniciarVariavelCategory()
    }, []);


    return (
        <Container fluid>
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw'}}>
                    <h5 style={{textAlign:'center'}}>Categoria</h5>
                    <Form>
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Cursos" onChange={(event) => setName(event.target.value)}/>
                        </Form.Group>
                        <Button style={{margin:'2px'}} variant="primary" onClick={cadastrarCategoria}>
                            Criar
                        </Button>
                        <Button style={{margin:'2px'}} variant="info" >
                            Atualizar
                        </Button>
                        <Button style={{margin:'2px'}} variant="outline-danger" >
                            Excluir
                        </Button>
                    </Form>
                </Col>
                <Col xs={7} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh'}}>
                    <h3 style={{ textAlign: 'center', marginTop: '4vh' }}>{name}</h3>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}