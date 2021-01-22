import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    Button,
    Media,
    Card,
    Accordion,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';


export default function CreateIten() {
    const [fotoCapa, setFotoCapa] = useState('');
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Cursos');
    const [preco, setPreco] = useState(0.00);
    const [linkPagamento, setLinkPagemento] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkVideo, setLinkVideo] = useState('');

    function novaFotoCapa(entradaDeFoto){
        setFotoCapa(entradaDeFoto);
    }
    function novoNome(entradaDeNome){
        setNome(entradaDeNome);
    }
    function novaCategoria(entradaDeCategoria){
        setCategoria(entradaDeCategoria);
    }
    function novoPreco(entradaDePreco){
        setPreco(entradaDePreco);
    }
    function novoLinkPagamento(entradaDePagamento){
        setLinkPagemento(entradaDePagamento);
    }
    function novaDescricao(entradaDeDescricao){
        setDescricao(entradaDeDescricao);
    }
    function novaLinkVideo(entradaDeVideo){
        setLinkVideo(entradaDeVideo);
    }

    return (
        <Container fluid>
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <h5 style={{textAlign:'center'}}>Produto</h5>
                    <Form>
                        <Form.Group controlId="fotocapa">
                            <Form.Label>Link Foto:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://google.fotos/minhaimagem" onChange={(event) => novaFotoCapa(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Curso de emagrecimento" onChange={(event) => novoNome(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="Categoria">
                            <Form.Label>Categoria:</Form.Label>
                            <Form.Control as="select" multiple>
                                <option onClick={(event)=> novaCategoria(event.target.value)} value='Cursos'>Cursos</option>
                                <option onClick={(event)=> novaCategoria(event.target.value)} value='Ebooks'>Ebooks</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="preco">
                            <Form.Label>Preço:</Form.Label>
                            <Form.Control placeholder="" type="number" onChange={(event) => novoPreco(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="linkpagamento">
                            <Form.Label>Link pagamento:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://meupagamento.com" onChange={(event) => novoLinkPagamento(event.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(event) => novaDescricao(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="linkvideo">
                            <Form.Label>Link vídeo:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://youtube.com/meuvideo" onChange={(event) => novaLinkVideo(event.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Criar
                        </Button>
                    </Form>
                </Col>
                <Col xs={7} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <div>
                        <Media style={{ marginTop: '5vh', boxShadow: "5px 5px 5px black", borderRadius: 10 }}>
                            <img
                                style={{ width: '20vw', borderRadius: 10 }}
                                className="mr-3"
                                src={fotoCapa}
                            />
                            <Media.Body className="mr-3">
                                <h5 style={{ marginBottom: '5vh' }}><u>{nome}</u></h5>
                                <p>Categoria: {categoria}</p>
                                <p>Criado em: 0000-00-00</p>
                                <h3 style={{ color: 'red', marginBottom: '5vh' }}>R${(parseFloat(preco)).toFixed(2)}</h3>
                                <Button onClick={() => { alert('Aqui vc será direcionado para o pagamento!(integração com o link do outro sistema.)') }} style={{ marginRight: '1vw', marginBottom: '1vh' }} variant="warning" size="lg" block>
                                    <ShoppingCartIcon /> Comprar
                                </Button>
                            </Media.Body>
                        </Media>
                        <Card border="secondary" style={{ marginTop: '5vh', borderRadius: 10 }}>
                            <Card.Header><DescriptionIcon /> Descrição</Card.Header>
                            <Card.Body>
                                <Card.Text style={{ textAlign: 'center' }}>{descricao}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Row border="secondary" className="justify-content-center" style={{ marginTop: '5vh', borderRadius: 10 }}>
                            <iframe style={{
                                width: '70vw',
                                height: '50vh',
                                borderRadius: 10,
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            }} src={linkVideo} />
                        </Row>
                        <Accordion defaultActiveKey="0" style={{ marginTop: '5vh', borderRadius: 10, marginBottom: '10vh' }} >
                            <Card border="info">
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <CommentIcon /> Comentários!
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <h6>Nome do Cliente</h6>
                                        <p>"Comentário do cliente!"</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}