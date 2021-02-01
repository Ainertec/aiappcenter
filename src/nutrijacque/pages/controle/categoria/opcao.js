import React, { useState, useEffect } from "react";
import {
    Container,
    InputGroup,
    Button,
    FormControl,
    Row,
    Col,
    ListGroup,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Api from "../../../services/api";


export default function ListCategory() {
    const[categorys, setCategorys] = useState([]);
    const[busca, setBusca] = useState('');

    async function exibirTodos(){
        Api.get('categorys').then(response => {
            setCategorys(response.data);
        });
    }

    async function exibirPorNome(){
        Api.get(`categorys/${busca}`).then(response => {
            setCategorys(response.data);
        });
    }

    function exibiId(id){
        const result = categorys.find(element => element._id == id);
        console.log(result);
    }

    return (
        <Container fluid>
            <h4 style={{textAlign:'center', marginBottom:'3vh'}}>Listagem de categorias</h4>
            <Row>
                <Col xs={12} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'75vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup>
                            <FormControl
                                placeholder="Exemplo: Curso"
                                onChange={(event) => setBusca(event.target.value)}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-info" onClick={exibirPorNome}>Buscar</Button>
                                <Button variant="outline-info" onClick={exibirTodos}>Exibir todos</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ListGroup style={{marginTop:'5vh'}}>
                            {
                                categorys[0]?
                                    categorys.map((category) => (
                                        <ListGroup.Item variant="warning" onClick={()=> exibiId(category._id)} action key={category._id}>
                                            <strong><u>{category.name}</u></strong>
                                        </ListGroup.Item>
                                    ))
                                :
                                    <h4>Nenhuma categoria listada!</h4>
                            }
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}