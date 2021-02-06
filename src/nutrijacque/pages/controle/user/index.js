import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../../contexts/auth';
import Carregando from "../../../components/progress/carregando";
import { useProgresso } from "../../../contexts/prog";
import Notification from "../../../components/notification/notification";
import { useAlert } from '../../../contexts/alertN';
import { useValidation } from '../../../validation/validation';

import Api from "../../../services/api";

export default function UserUpdate({ dado }) {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const { validaCampoText } = useValidation();
    const { user, signOut } = useAuth();
    const [ idUser, setIdUser] = useState('');
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ question, setQuestion] = useState('');
    const [ response, setResponse] = useState('');

    function notificacaoUsuario(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    async function atualizarUser() {
        if(validaCampoText([idUser, username, password, response, question])){
            const user = {
                username,
                password,
                question,
                response,
                admin:true
            };
        
            await setProgresso(true);
            await Api.put(`users/${idUser}`, user).then(response => {
                notificacaoUsuario(`Usuário ${response.data.username} atualizado com sucesso!`,'success');
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoUsuario(`Não foi possível atualizar o usuário! Verifique os dados e tente novamente`, 'danger');
                    }else{
                        notificacaoUsuario(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoUsuario(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
            signOut();
        }else{
            notificacaoUsuario('Preencha todos os campos!', 'danger');
        }
    }

    useEffect(() => {
        setQuestion(user.question);
        setUsername(user.username);
        setIdUser(user._id);
    }, []);

    return (
        <Container fluid>
            <Notification />
            <Carregando />
            <Card>
                <Card.Header>Dados de usuário</Card.Header>
                <Card.Body>
                    <Card.Title style={{marginTop:'3vh'}}>Usuário logado: {username}</Card.Title>
                    <Form style={{marginTop:'10vh'}}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="campousername">
                                <Form.Label>Nome de usuário:</Form.Label>
                                <Form.Control placeholder="Nome de usuário" onChange={(event) => username(event.target.value)} value={username} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="camposenha">
                                <Form.Label>Senha:</Form.Label>
                                <Form.Control placeholder="Senha" onChange={(event) => setPassword(event.target.value)} value={password} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="campopergunta">
                                <Form.Label>Pergunta para recuperação de conta:</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option onClick={(event) => setQuestion(event.target.value)} value="Qual o modelo do seu primeiro carro?">Qual o modelo do seu primeiro carro?</option>
                                    <option onClick={(event) => setQuestion(event.target.value)} value="Qual o nome do seu melhor amigo de infância?">Qual o nome do seu melhor amigo de infância?</option>
                                    <option onClick={(event) => setQuestion(event.target.value)} value="Qual o nome do seu primeiro animal de estimação?">Qual o nome do seu primeiro animal de estimação?</option>
                                    <option onClick={(event) => setQuestion(event.target.value)} value="Qual o nome da sua mãe?">Qual o nome da sua mãe?</option>
                                    <option onClick={(event) => setQuestion(event.target.value)} value="Qual sua cor preferida?">Qual sua cor preferida?</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="camporesposta">
                                <Form.Label>Resposta para recuperação de conta:</Form.Label>
                                <Form.Control placeholder="Resposta de recuperação" onChange={(event) => setResponse(event.target.value)} value={response} />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    <Button variant="primary" onClick={atualizarUser}>Atualizar</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}