import React ,{ useState }from "react";
import {
    Container,
    Button,
    Form,
    Card,
    Image,
    Row,
    Modal,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/auth';
import Carregando from "../../components/progress/carregando";
import { useProgresso } from "../../contexts/prog";
import Notification from "../../components/notification/notification";
import { useAlert } from '../../contexts/alertN';
import { useValidation } from '../../validation/validation';
import Api from '../../services/api';


import SecurityIcon from '@material-ui/icons/Security';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import NavBar from './navbar';

export default function Login() {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const { validaCampoText } = useValidation();
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth();

    function notificacaoLogin(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    async function hanldleLogin() {
        await setProgresso(true)
        if(validaCampoText([name,password])){
            const result = await signIn({ name, password });
            if (result == 200) {
                notificacaoLogin('Login efetuado com sucesso!','success');
            } else {
                notificacaoLogin('Usuário ou senha incorretos!','danger');
            }
        }else{
            notificacaoLogin('Preencha o usuário e a senha!','danger');
        }
        await setProgresso(false)
    }


    const [question, setQuestion] = useState('Nenhuma.');
    const [response, setResponse] = useState();
    const [newPassword, setNewPassword] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    async function handleAbrirRecuperarSenha() {
        if(validaCampoText([name])){
            setShow(true);
            await setProgresso(true)
            await Api.get(`forgot/${name}`).then(result => {
                setQuestion(result.data.question);
            }).catch(error => {
                try {
                    if(error.response.status){
                        notificacaoLogin(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoLogin(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false)
        }else{
            notificacaoLogin('Preencha o usuário!','danger');
        }
    };

    async function recuperarSenhaConta() {
        if(validaCampoText([response,newPassword])){
            const resetSenha = {
                username: name,
                response,
                password: newPassword,
            }
    
            await setProgresso(true);
            await Api.post(`forgot`, resetSenha).then(result => {
                notificacaoLogin(`Conta recuperada! Efetue o login.`, 'success');
                setShow(false);
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoLogin(`Resposta incorreta! Não foi possível recuperar a conta.`, 'danger');
                    }else{
                        notificacaoLogin(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoLogin(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoLogin('Preencha a resposta e nova senha!','danger');
        }
    }

    
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Notification />
                <Carregando />
                <Card border="info" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <Row className="justify-content-center">
                        <Image style={{ opacity: 1, width: '18vw', marginTop: '2vh', borderRadius: 20, boxShadow: "5px 5px 5px black" }} src="https://i.ibb.co/ZKhr9x3/download.png" />
                    </Row>
                    <Card.Body>
                        <h5 style={{ marginBottom: '2vh', textAlign: 'center' }}><SecurityIcon /> Acessar Conta Administrador</h5>
                        <Row className="justify-content-center">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control type="text" className="mb-2" placeholder="Entre com o usuário." onChange={event => setName(event.target.value)} value={name} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Entre com a nova senha." onChange={event => setPassword(event.target.value)} value={password} />
                                </Form.Group>
                                <Button onClick={hanldleLogin} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="primary" size="lg" block>
                                    <VpnKeyIcon /> Entrar
                                </Button>
                                <a type="button" onClick={handleAbrirRecuperarSenha} >Esqueceu a senha?</a>
                            </Form>
                        </Row>
                    </Card.Body>
                </Card>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Recuperar conta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Responda a pergunta: {question}</h6>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Resposta:</Form.Label>
                                <Form.Control type="text" className="mb-2" placeholder="Entre com a resposta." onChange={event => setResponse(event.target.value)} value={response} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Nova senha:</Form.Label>
                                <Form.Control type="password" placeholder="Entre com a nova senha." onChange={event => setNewPassword(event.target.value)} value={newPassword} />
                            </Form.Group>
                            <Button onClick={recuperarSenhaConta} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="success" size="lg" block>
                                Atualizar
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
}