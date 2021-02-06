import React, { useState, useEffect  } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carregando from "../../../components/progress/carregando";
import { useProgresso } from "../../../contexts/prog";

import Api from "../../../services/api";
import { useCategory } from "../../../contexts/category";

export default function CreateCategory({ dado }) {
    const { setProgresso } = useProgresso();
    const {
        id,
        name,
        setName,
        items,
        setItems,
        iniciarVariavelCategory,
    } = useCategory();


    async function cadastrarCategoria() {
        const category = {
          name,
          items:[]
        };
    
        await setProgresso(true);
        await Api.post(`categorys`, category).then(response => {
          //notificacaoCadastroCliente();
        });
        await setProgresso(false);
    
    }

    async function atualizarCategoria() {
        let filtroItems = [];
        for(const fitem of items){
            filtroItems.push(fitem._id);
        };

        const category = {
          name,
          items:filtroItems
        };
    
        await setProgresso(true);
        await Api.put(`categorys/${id}`, category).then(response => {
          //notificacaoCadastroCliente();
          console.log('atualizado com sucesso!')
        });
        await setProgresso(false);
    
    }

    async function excluirCategoria() {
        await setProgresso(true);
        await Api.delete(`categorys/${id}`).then(response => {
          //notificacaoCadastroCliente();
          console.log('Excluido com sucesso!')
        });
        await setProgresso(false);
    
    }
    
    useEffect(() => {
        if(dado.tipo=='cadastrar'){
            iniciarVariavelCategory()
        }
    }, []);


    return (
        <Container fluid>
            <Carregando />
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw'}}>
                    <h5 style={{textAlign:'center'}}>Categoria</h5>
                    <Form>
                        <Form.Group controlId="Camponome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Cursos" onChange={(event) => setName(event.target.value)} value={name}/>
                        </Form.Group>
                        {
                            dado.tipo=='cadastrar'?
                                <Button style={{margin:'2px'}} variant="primary" onClick={cadastrarCategoria}>
                                    Criar
                                </Button>
                            :
                                <>
                                    <Button style={{margin:'2px'}} variant="info" onClick={atualizarCategoria}>
                                        Atualizar
                                    </Button>
                                    <Button style={{margin:'2px'}} variant="outline-danger" onClick={excluirCategoria} >
                                        Excluir
                                    </Button>
                                </>
                        }
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