import React, { useState, useEffect } from "react";
import {
    Container,
    Media,
    Card,
    Button,
    Accordion,
    Row,
    Col,
    InputGroup,
    FormControl,
    Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import SmsIcon from '@material-ui/icons/Sms';
import SendIcon from '@material-ui/icons/Send';

import Api from "../../services/api";

import NavBar from './navbar';
import { useItem } from "../../contexts/item";

export default function ItemSelected() {
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

        Api.put(`itemscomments/${id}`, {comments:todasAvalicoes}).then(response => {
            console.log(response.data)
        })
    }

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Media style={{ marginRight: '10vw', marginLeft: '10vw', marginTop: '5vh', boxShadow: "5px 5px 5px black", borderRadius: 10 }}>
                    <img
                        style={{ width: '20vw', borderRadius: 10 }}
                        className="mr-3"
                        src={fotoCapa}
                    />
                    <Media.Body className="mr-3">
                        <h5 style={{ marginBottom: '5vh' }}><u>{nome}</u></h5>
                        <p>Criado em: {createdAt}</p>
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
                                                <h6>{option.name}</h6>
                                                <p>"{option.mensage}"</p>
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
                                            <InputGroup md={{ span: 6, offset: 3 }} className="mb-3">
                                                <FormControl placeholder="Seu nome" onChange={(event) => setNomeAvaliacao(event.target.value)}/>
                                                <FormControl placeholder="Seu comentário" onChange={(event) => setMensageAvaliacao(event.target.value)}/>
                                                <InputGroup.Append>
                                                    <Button variant="info" size="sm" onClick={enviarAvaliacao}><SendIcon /> Enviar</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
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