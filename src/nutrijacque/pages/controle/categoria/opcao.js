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
import Notification from "../../../components/notification/notification";
import { useAlert } from '../../../contexts/alertN';
import { useValidation } from '../../../validation/validation';

import SearchIcon from '@material-ui/icons/Search';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import { useCategory } from "../../../contexts/category";
import CreateCategory from './index';

import Api from "../../../services/api";


export default function ListCategory() {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const { validaCampoText } = useValidation();
    const[categorys, setCategorys] = useState([]);
    const[busca, setBusca] = useState('');
    const [show, setShow] = useState(false);
    const {
        setId,
        setName,
        setItems,
        iniciarVariavelCategory,
    } = useCategory();


    function notificacaoCategoria(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    const handleClose = () => (setShow(false),iniciarVariavelCategory());
    const handleShow = () => setShow(true);

    async function exibirTodos(){
        await setProgresso(true);
        await Api.get('categorys').then(response => {
            setCategorys(response.data);
        }).catch(error => {
            try {
                if(error.response.status){
                    notificacaoCategoria(`Tivemos um problema: ${error}.`, 'danger');
                }
            } catch (error) {
                notificacaoCategoria(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
            }
        });
        await setProgresso(false);
    }

    async function exibirPorNome(){
        if(validaCampoText([busca])){
            await setProgresso(true);
            await Api.get(`categorys/${busca}`).then(response => {
                setCategorys(response.data);
            }).catch(error => {
                try {
                    if(error.response.status){
                        notificacaoCategoria(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoCategoria(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoCategoria(`Preencha a busca!`, 'danger');
        }
    }

    function selecionarCategoria(id){
        const result = categorys.find(element => element._id == id);
        setId(result._id);
        setName(result.name);
        setItems(result.items);
        handleShow();
    }

    return (
        <Container fluid>
            <Notification />
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
                                <Button size="sm" variant="outline-info" onClick={exibirPorNome}><SearchIcon /> Buscar</Button>
                                <Button size="sm" variant="outline-info" onClick={exibirTodos}><SearchIcon /> Exibir todos</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <ListGroup style={{marginTop:'5vh'}}>
                            {
                                categorys[0]?
                                    categorys.map((category) => (
                                        <ListGroup.Item variant="warning" onClick={()=> selecionarCategoria(category._id)} action key={category._id}>
                                            <strong><u>{category.name}</u></strong>
                                        </ListGroup.Item>
                                    ))
                                :
                                    <Alert variant="warning">
                                        <SentimentVeryDissatisfiedIcon /> Nenhuma categoria listada!
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