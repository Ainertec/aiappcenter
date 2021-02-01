import React, { useState, useEffect } from "react";
import {
    Container,
    InputGroup,
    Button,
    FormControl,
    Row,
    Col,
    ListGroup,
    Image,
    Badge,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Api from "../../../services/api";


export default function ListIten() {
    const[items, setItems] = useState([]);
    const[busca, setBusca] = useState('');

    async function exibirTodos(){
        Api.get('items').then(response => {
            setItems(response.data);
        });
    }

    async function exibirPorNome(){
        Api.get(`items/${busca}`).then(response => {
            setItems(response.data);
        });
    }

    function exibiId(id){
        const result = items.find(element => element._id == id);
        console.log(result);
    }

    return (
        <Container fluid>
            <h4 style={{textAlign:'center', marginBottom:'3vh'}}>Listagem de produtos</h4>
            <Row>
                <Col xs={12} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'75vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup>
                            <FormControl
                                placeholder="Exemplo: curso de emagrecimento"
                                onChange={(event) => setBusca(event.target.value)}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-info" onClick={exibirPorNome}>Buscar</Button>
                                <Button variant="outline-info" onClick={exibirTodos}>Exibir todos</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ListGroup style={{marginTop:'5vh'}}>
                            {
                                items[0]?
                                    items.map((item) => (
                                        <ListGroup.Item variant="warning" onClick={()=> exibiId(item._id)} action key={item._id}>
                                            <Row>
                                                <Col xs={3}>
                                                    <Image src={item.photo} style={{maxHeight:'10vh'}} roundedCircle />
                                                </Col>
                                                <Col xs={6}>
                                                    <strong><u>{item.name}</u></strong>
                                                </Col>
                                                <Col xs={3}>
                                                    <Badge variant="success">R$ {item.price.toFixed(2)}</Badge>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))
                                :
                                    <h4>Nenhum item listado!</h4>
                            }
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
}