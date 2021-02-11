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
import Notification from "../../../components/notification/notification";
import { useAlert } from '../../../contexts/alertN';
import { useValidation } from '../../../validation/validation';
import { useNavigationControler } from '../../../contexts/navigationControler';

import CheckIcon from '@material-ui/icons/Check';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneAllIcon from '@material-ui/icons/DoneAll';

import Api from "../../../services/api";
import { useCategory } from "../../../contexts/category";

export default function CreateCategory({ dado }) {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const { validaCampoText } = useValidation();
    const {
        setNavegacao,
    } = useNavigationControler();
    const [ botaoConfirmacaoAtualizar, setBotaoConfirmacaoAtualizar] = useState(false);
    const [ botaoConfirmacaoExcluir, setBotaoConfirmacaoExcluir] = useState(false);
    const {
        id,
        name,
        setName,
        items,
        setItems,
        iniciarVariavelCategory,
    } = useCategory();


    function notificacaoCategoria(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }


    async function cadastrarCategoria() {
        if(validaCampoText([name])){
            const category = {
                name,
                items:[]
            };
        
            await setProgresso(true);
            await Api.post(`categorys`, category).then(response => {
                notificacaoCategoria(`Categoria ${response.data.name} cadastrada com sucesso.`, 'success');
                setNavegacao(3);
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoCategoria(`Não foi possível cadastrar a categoria! Verifique os dados e tente novamente.`, 'danger');
                    }else{
                        notificacaoCategoria(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoCategoria(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoCategoria('Preencha o nome da categoria!','danger');
        }
    }

    async function atualizarCategoria() {
        if(validaCampoText([name])){
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
                notificacaoCategoria(`Categoria ${response.data.name} atualizada com sucesso.`, 'success');
                setNavegacao(0);
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoCategoria(`Não foi possível atualizar a categoria! Verifique os dados e tente novamente.`, 'danger');
                    }else{
                        notificacaoCategoria(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoCategoria(`Tivemos um problema: Servidor indisponível!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoCategoria('Preencha o nome da categoria!','danger');
        }
    }

    async function excluirCategoria() {
        await setProgresso(true);
        await Api.delete(`categorys/${id}`).then(response => {
            notificacaoCategoria(`Categoria excluida com sucesso.`, 'success');
            setNavegacao(0);
        }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoCategoria(`Não foi possível excluir a categoria! Tente novamente.`, 'danger');
                    }else{
                        notificacaoCategoria(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoCategoria(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
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
            <Notification />
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw'}}>
                    <h5 style={{textAlign:'center'}}>Categoria</h5>
                    <Form>
                        <Form.Group controlId="Camponome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Cursos" onChange={(event) => setName(event.target.value)} value={name}/>
                        </Form.Group>
                        {
                            botaoConfirmacaoAtualizar?
                                <p style={{color:'red'}}>Atualizar categoria! Deseja continuar?</p>
                            :
                                <></>
                        }
                        {
                            botaoConfirmacaoExcluir?
                                <p style={{color:'red'}}>Excluir categoria! Deseja continuar?</p>
                            :
                                <></>
                        }
                        {
                            dado.tipo=='cadastrar'?
                                <Button size="sm" style={{margin:'2px'}} variant="primary" onClick={cadastrarCategoria}>
                                    <CheckIcon /> Criar
                                </Button>
                            :
                                <>
                                    <Button size="sm" style={{margin:'2px'}} variant={botaoConfirmacaoAtualizar? "warning":"info"} onClick={()=>{botaoConfirmacaoAtualizar? atualizarCategoria():setBotaoConfirmacaoAtualizar(true)}}>
                                        {botaoConfirmacaoAtualizar? <><CheckIcon /> Confirmar</>:<><DoneAllIcon /> Atualizar</>}
                                    </Button>
                                    <Button size="sm" style={{margin:'2px'}} variant={botaoConfirmacaoExcluir? "warning":"outline-danger"} onClick={()=>{botaoConfirmacaoExcluir? excluirCategoria():setBotaoConfirmacaoExcluir(true)}} >
                                        {botaoConfirmacaoExcluir? <><CheckIcon /> Confirmar</>:<><DeleteForeverIcon /> Excluir</>}
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