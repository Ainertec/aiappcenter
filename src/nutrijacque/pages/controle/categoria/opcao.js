import React, { useState, useEffect } from "react";
import {
    Container,
    InputGroup,
    Button,
    FormControl,
    Row,
    Col,
    ListGroup,
    Modal,
    Alert,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carregando from "../../../components/progress/carregando";
import { useProgresso } from "../../../contexts/prog";

import { useCategory } from "../../../contexts/category";
import CreateCategory from './index';

import Api from "../../../services/api";


export default function ListCategory() {
    const { setProgresso } = useProgresso();
    const[categorys, setCategorys] = useState([]);
    const[busca, setBusca] = useState('');
    const [show, setShow] = useState(false);
    const {
        setId,
        setName,
        setItems,
        iniciarVariavelCategory,
    } = useCategory();


    const handleClose = () => (setShow(false),iniciarVariavelCategory());
    const handleShow = () => setShow(true);

    async function exibirTodos(){
        await setProgresso(true);
        await Api.get('categorys').then(response => {
            setCategorys(response.data);
        });
        await setProgresso(false);
    }

    async function exibirPorNome(){
        await setProgresso(true);
        await Api.get(`categorys/${busca}`).then(response => {
            setCategorys(response.data);
        });
        await setProgresso(false);
    }

    function exibiId(id){
        const result = categorys.find(element => element._id == id);
        console.log(result);
        setId(result._id);
        setName(result.name);
        setItems(result.items);
        handleShow();
    }

    return (
        <Container fluid>
            <Carregando />
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
                                    <Alert variant="warning">
                                        Nenhuma categoria listada!
                                    </Alert>
                            }
                        </ListGroup>
                    </Col>
                </Col>
            </Row>
            <Modal show={show} size="xl" onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateCategory dado={{tipo:'modificar'}} />
                </Modal.Body>
            </Modal>
        </Container>
    );
}