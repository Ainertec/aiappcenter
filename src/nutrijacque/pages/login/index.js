import React ,{ useState }from "react";
import {
    Container,
    Button,
    Form,
    Card,
    Image,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../contexts/auth';
import Api from '../../services/api';


import SecurityIcon from '@material-ui/icons/Security';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import NavBar from './navbar';

export default function Login() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = useAuth();

    async function hanldleLogin() {
        //await setProgresso(true)
        const result = await signIn({ name, password });
        //await setProgresso(false)
        /*if (result == 200) {
            notificacaodeLogin('Login efetuado com sucesso!');
        } else {
            notificacaodeLogin('Usuário ou senha incorretos!');
        }*/
    }

    
    return (
        <div>
            <NavBar />
            <Container fluid>
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
                                    <Form.Control type="password" placeholder="Entre com a senha." onChange={event => setPassword(event.target.value)} value={password} />
                                </Form.Group>
                                <Button onClick={hanldleLogin} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="primary" size="lg" block>
                                    <VpnKeyIcon /> Entrar
                                </Button>
                                <a href="#">Esqueceu a senha?</a>
                            </Form>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}