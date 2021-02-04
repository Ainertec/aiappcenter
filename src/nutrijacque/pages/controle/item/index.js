import React, { useState, useEffect } from "react";
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
import Carregando from "../../../components/progress/carregando";
import { useProgresso } from "../../../contexts/prog";

import Api from "../../../services/api";
import { useItem } from "../../../contexts/item";


import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';


export default function CreateIten({ dado }) {
    const { setProgresso } = useProgresso();
    const [categorys, setCategorys] = useState([]);
    const [ idCategoria, setIdCategoria] = useState('');
    const {
        id,
        fotoCapa,
        setFotoCapa,
        nome,
        setNome,
        preco,
        setPreco,
        linkPagamento,
        setLinkPagamento,
        descricao,
        setDescricao,
        linkVideo,
        setLinkVideo,
        createdAt,
        iniciarVariaveisItem
    } = useItem();


    async function cadastrarItem() {
        const item = {
            name:nome,
            photo:fotoCapa,
            linkpagament:linkPagamento,
            description:descricao,
            price:preco,
            linkvideo:linkVideo,
            comments: []
        };
    
        await setProgresso(true);
        await Api.post(`items`, item).then(response => {
            //notificacaoCadastroCliente();
            adicionarItemNaCategoria(response.data._id);
        });
        await setProgresso(false);
    }

    async function adicionarItemNaCategoria(id) {
        let categoriaAtualizada = null, vetorDeItens = [];
        categorys.map((option) => (
            option._id == idCategoria ? categoriaAtualizada = option : null
        ));

        categoriaAtualizada._id = undefined;
        categoriaAtualizada.createdAt = undefined;
        categoriaAtualizada.updatedAt = undefined;
        categoriaAtualizada.__v = undefined;
        vetorDeItens.push(id);
        categoriaAtualizada.items.map((option) => (
            vetorDeItens.push(option._id)
        ));
        categoriaAtualizada.items = vetorDeItens;

        await setProgresso(true);
        await Api.put(`categorys/${idCategoria}`, categoriaAtualizada).then(response => {
            //notificacaoCadastroCliente();
        });
        await setProgresso(false);
    }

    async function atualizarItem() {
        const item = {
            name:nome,
            photo:fotoCapa,
            linkpagament:linkPagamento,
            description:descricao,
            price:preco,
            linkvideo:linkVideo,
            comments: []
        };
    
        await setProgresso(true);
        await Api.put(`items/${id}`, item).then(response => {
            //notificacaoCadastroCliente();
            console.log('atualizado com sucesso!')
        });
        await setProgresso(false);
    }

    async function excluirItem() {
        await setProgresso(true);
        await Api.delete(`items/${id}`).then(response => {
            //notificacaoCadastroCliente();
            console.log('excluido com sucesso!')
        });
        await setProgresso(false);
    }
    
    useEffect(() => {
        if(dado.tipo=='cadastrar'){
            iniciarVariaveisItem()
        }
    }, []);

    useEffect(() => {
        async function carregarCategorias(){
            await setProgresso(true);
            await Api.get('categorys').then(response => {
                setCategorys(response.data);
            });
            await setProgresso(false);
        }
        carregarCategorias();
    }, []);

    return (
        <Container fluid>
            <Carregando />
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <h5 style={{textAlign:'center'}}>Produto</h5>
                    <Form>
                        <Form.Group controlId="fotocapa">
                            <Form.Label>Link Foto:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://google.fotos/minhaimagem" onChange={(event) => setFotoCapa(event.target.value)} value={fotoCapa}/>
                        </Form.Group>
                        <Form.Group controlId="nome">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control placeholder="Exemplo: Curso de emagrecimento" onChange={(event) => setNome(event.target.value)} value={nome}/>
                        </Form.Group>
                        {
                            dado.tipo == 'cadastrar'?
                                <Form.Group controlId="Categoria">
                                    <Form.Label>Categoria:</Form.Label>
                                    <Form.Control as="select" multiple>
                                    {categorys.map((option) => (
                                        <option key={option._id} onClick={(event)=> setIdCategoria(event.target.value)} value={option._id}>{option.name}</option>
                                    ))}
                                    
                                    </Form.Control>
                                </Form.Group>
                            :
                                <></>
                        }
                        <Form.Group controlId="preco">
                            <Form.Label>Preço:</Form.Label>
                            <Form.Control type="number" onChange={(event) => setPreco(event.target.value)} value={(parseFloat(preco)).toFixed(2)}/>
                        </Form.Group>
                        <Form.Group controlId="linkpagamento">
                            <Form.Label>Link pagamento:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://meupagamento.com" onChange={(event) => setLinkPagamento(event.target.value)} value={linkPagamento}/>
                        </Form.Group>
                        <Form.Group controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(event) => setDescricao(event.target.value)} value={descricao}/>
                        </Form.Group>
                        <Form.Group controlId="linkvideo">
                            <Form.Label>Link vídeo:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://youtube.com/meuvideo" onChange={(event) => setLinkVideo(event.target.value)} value={linkVideo}/>
                        </Form.Group>
                        {
                            dado.tipo == 'cadastrar'?
                                <Button style={{margin:'2px'}} variant="primary" onClick={cadastrarItem}>
                                    Criar
                                </Button>
                            :
                                <>
                                    <Button style={{margin:'2px'}} variant="info" onClick={atualizarItem}>
                                        Atualizar
                                    </Button>
                                    <Button style={{margin:'2px'}} variant="outline-danger" onClick={excluirItem}>
                                        Excluir
                                    </Button>
                                </>
                        }
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
                                <p>Criado em: {createdAt? createdAt:'0000-00-00'}</p>
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