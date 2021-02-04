import React, { useState, useEffect } from "react";
import {
    Container,
    Media,
    Card,
    Button,
    Accordion,
    Row,
    Col,
    FormControl,
    Form,
    Alert,
    Badge
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { format, parseISO } from 'date-fns';
import Carregando from "../../components/progress/carregando";
import { useProgresso } from "../../contexts/prog";

import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import SmsIcon from '@material-ui/icons/Sms';
import SendIcon from '@material-ui/icons/Send';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

import Api from "../../services/api";

import NavBar from './navbar';
import { useItem } from "../../contexts/item";

export default function ItemSelected() {

    const history = useHistory();
    const handleToHome = () => {
        history.push("/nutricionistajacquelinethedim/");
    };

    const { setProgresso } = useProgresso();
    const [nomeAvaliacao, setNomeAvaliacao] = useState('');
    const [mensageAvaliacao, setMensageAvaliacao] = useState('');
    const {
        id,
        fotoCapa,
        nome,
        preco,
        linkPagamento,
        descricao,
        linkVideo,
        createdAt,
        comments,
    } = useItem();

    async function enviarAvaliacao(){
        await setProgresso(true);
        const newAvaliacao = {
            name:nomeAvaliacao,
            mensage:mensageAvaliacao
        }
        let todasAvalicoes = [];
        for(const comment of comments){
            todasAvalicoes.push({
                name:comment.name,
                mensage:comment.mensage
            })
        }
        todasAvalicoes.push(newAvaliacao);

        await Api.put(`itemscomments/${id}`, {comments:todasAvalicoes}).then(response => {
            console.log(response.data)
        })
        await setProgresso(false);
        handleToHome();
    }

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Carregando />
                <Media style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', boxShadow: "5px 5px 5px black", borderRadius: 10 }}>
                    <img
                        style={{ width: '20vw', borderRadius: 10 }}
                        className="mr-3"
                        src={fotoCapa}
                    />
                    <Media.Body className="mr-3">
                        <h5 style={{ marginBottom: '5vh' }}><u>{nome}</u></h5>
                        <p>Criado em: {format(parseISO(createdAt), 'dd/MM/yyyy HH:mm:ss')}</p>
                        <h3 style={{ color: 'red', marginBottom: '5vh' }}>R${(parseFloat(preco)).toFixed(2)}</h3>
                        <Button onClick={() => { alert(`Aqui vc será direcionado para o pagamento no link${linkPagamento}`) }} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="warning" size="lg" block>
                            <ShoppingCartIcon /> Comprar
                        </Button>
                    </Media.Body>
                </Media>
                <Card border="secondary" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <Card.Header><DescriptionIcon /> Descrição</Card.Header>
                    <Card.Body>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {descricao}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Row border="secondary" className="justify-content-center" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10 }}>
                    <iframe style={{
                        width: '70vw',
                        height: '50vh',
                        borderRadius: 10,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    }} src={linkVideo} />
                </Row>
                <Accordion defaultActiveKey="0" style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', borderRadius: 10, marginBottom: '10vh' }} >
                    <Card border="info">
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <CommentIcon /> Comentários!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                {
                                    comments[0]?
                                        comments.map((option) =>(
                                            <>
                                                <h6><Badge pill variant="success"><RecordVoiceOverIcon />{ option.name}</Badge></h6>
                                                <p>- "{option.mensage}"</p>
                                            </>
                                        ))
                                    :
                                        <Alert variant="warning">
                                            Nenhum comentário!
                                        </Alert>
                                }
                                <hr/>
                                <p style={{backgroundColor:'rgba(0,0,0,0.1)', borderRadius:20}}>
                                    <Row>
                                        <Col md={{ span: 6, offset: 3 }}>
                                            <SmsIcon />
                                            <Form md={{ span: 6, offset: 3 }} className="mb-3">
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Seu nome:</Form.Label>
                                                    <FormControl placeholder="Seu nome" onChange={(event) => setNomeAvaliacao(event.target.value)}/>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Seu comentário:</Form.Label>
                                                    <FormControl as="textarea" rows={3} placeholder="Seu comentário" onChange={(event) => setMensageAvaliacao(event.target.value)}/>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Button variant="info" size="sm" onClick={enviarAvaliacao}><SendIcon /> Enviar</Button>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    );
}