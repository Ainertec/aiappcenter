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

import Api from "../../../services/api";

export default function UserUpdate({ dado }) {
    const { setProgresso } = useProgresso();
    const { user, signOut } = useAuth();
    const [ idUser, setIdUser] = useState('');
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');
    const [ question, setQuestion] = useState('');
    const [ response, setResponse] = useState('');

    async function atualizarUser() {
        const user = {
            username,
            password,
            question,
            response,
            admin:true
        };

        console.log(user)
    
        await setProgresso(true);
        /*await Api.put(`users/${idUser}`, user).then(response => {
            //notificacaoCadastroCliente();
            console.log('Usuário atualizado com sucesso!')
        });*/
        await setProgresso(false);
        //signOut();
    }

    useEffect(() => {
        setQuestion(user.question);
        setUsername(user.username);
        setIdUser(user._id);
    }, []);

    return (
        <Container fluid>
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
                                <Form.Control as="select" defaultValue={question}>
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