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
    Table
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgbbUploader from 'imgbb-uploader';
import Carregando from "../../../components/progress/carregando";
import { useProgresso } from "../../../contexts/prog";
import Notification from "../../../components/notification/notification";
import { useAlert } from '../../../contexts/alertN';
import { useValidation } from '../../../validation/validation';
import { useNavigationControler } from '../../../contexts/navigationControler';

import Api from "../../../services/api";
import { useItem } from "../../../contexts/item";


import DescriptionIcon from '@material-ui/icons/Description';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommentIcon from '@material-ui/icons/Comment';
import CheckIcon from '@material-ui/icons/Check';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DoneAllIcon from '@material-ui/icons/DoneAll';


export default function CreateIten({ dado }) {
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
    const [categorys, setCategorys] = useState([]);
    const [ idCategoria, setIdCategoria] = useState('');
    const [ botaoConfirmacaoAtualizar, setBotaoConfirmacaoAtualizar] = useState(false);
    const [ botaoConfirmacaoExcluir, setBotaoConfirmacaoExcluir] = useState(false);
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
        setComments,
        comments,
        iniciarVariaveisItem
    } = useItem();

    function notificacaoItem(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    async function addImagem(file) {

        await setProgresso(true);
        const fileReader = new FileReader();
        fileReader.onloadend = async function(){
            const divisaoBase64 = (fileReader.result).split("base64,");
            const options = {
                apiKey: process.env.REACT_APP_API_IMG_KEY_NUTRIJACQUETHEDIM,  
                base64string: divisaoBase64[1]
              };
              
            await imgbbUploader(options).then((response) => setFotoCapa(response.url))
            .catch((error) => notificacaoItem(`Tivemos um problema: Servidor de imagem apresenta problemas!`, 'danger'))
            await setProgresso(false);
        }
        fileReader.readAsDataURL(file);
    }

    async function cadastrarItem() {
        if(validaCampoText([fotoCapa,nome,preco,linkPagamento,descricao])){
            const item = {
                name:nome,
                photo:fotoCapa,
                linkpagament:linkPagamento,
                description:descricao,
                price:preco,
                linkvideo:validaCampoText([linkVideo])? linkVideo:'nulo',
                comments: []
            };
        
            await setProgresso(true);
            await Api.post(`items`, item).then(response => {
                notificacaoItem(`Produto ${response.data.name} cadastrado com sucesso.`, 'success');
                adicionarItemNaCategoria(response.data._id);
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoItem(`Não foi possível cadastrar o produto! Verifique os dados e tente novamente.`, 'danger');
                    }else{
                        notificacaoItem(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoItem(`Tivemos um problema: Servidor indisponivel!`, 'danger');
                }
            });
            await setProgresso(false);
        }else{
            notificacaoItem(`Preencha todos os campos obrigatórios!`, 'danger');
        }
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
            setNavegacao(0);
        }).catch(error => {
            try {
                if(error.response.status == 400){
                    notificacaoItem(`Não foi possível adicionar o produto na categoria! Exclua o produto e tente novamente`, 'danger');
                }else{
                    notificacaoItem(`Tivemos um problema: ${error}.`, 'danger');
                }
            } catch (error) {
                notificacaoItem(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
            }
        });
        await setProgresso(false);
    }

    async function atualizarItem() {
        if(validaCampoText([fotoCapa,nome,preco,linkPagamento,descricao])){
            const removeIdComments = [];
            for (const item of comments) {
                removeIdComments.push({'name':item.name,'mensage':item.mensage})
            }
            const item = {
                name:nome,
                photo:fotoCapa,
                linkpagament:linkPagamento,
                description:descricao,
                price:preco,
                linkvideo: validaCampoText([linkVideo])? linkVideo:'nulo',
                comments: removeIdComments
            };
        
            await setProgresso(true);
            await Api.put(`items/${id}`, item).then(response => {
                notificacaoItem(`Produto ${response.data.name} atualizado com sucesso.`, 'success');
                setNavegacao(0);
            }).catch(error => {
                try {
                    if(error.response.status == 400){
                        notificacaoItem(`Não foi possível atualizar o produto! Verifique os dados e tente novamente.`, 'danger');
                    }else{
                        notificacaoItem(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoItem(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoItem(`Preencha todos os campos obrigatórios!`, 'danger');
        }
    }

    async function excluirItem() {
        await setProgresso(true);
        await Api.delete(`items/${id}`).then(response => {
            notificacaoItem(`Produto excluído com sucesso.`, 'success');
            setNavegacao(0);
        }).catch(error => {
            try {
                if(error.response.status == 400){
                    notificacaoItem(`Não foi possível excluir o produto! Tente novamente.`, 'danger');
                }else{
                    notificacaoItem(`Tivemos um problema: ${error}.`, 'danger');
                }
            } catch (error) {
                notificacaoItem(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
            }
        });
        await setProgresso(false);
    }

    function removerComentario(id) {
        const newComments = [];
        let comentarioInvalido = null;
        for (const item of comments) {
            if(item._id != id){
                newComments.push({'name':item.name,'mensage':item.mensage})
            }else{
                comentarioInvalido = item;
            }
        }
        setComments(newComments);
        notificacaoItem(`Comentário de ${comentarioInvalido.name} removido, clique em atualizar para salvar as alterações!.`, 'success');
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
            }).catch(error => {
                try {
                    if(error.response.status){
                        notificacaoItem(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoItem(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }
        carregarCategorias();
    }, []);

    return (
        <Container fluid>
            <Notification />
            <Carregando />
            <Row>
                <Col xs={4} style={{borderWidth:'1px', borderStyle:'solid', borderColor:'#000', height:'80vh', boxShadow: "5px 5px 5px black", padding:'3vh', marginRight:'2vw', position:'relative', zIndex:1, overflow:'scroll'}}>
                    <h5 style={{textAlign:'center'}}>Produto</h5>
                    <Form>
                        <Form.Group controlId="fotocapa">
                            <Form.Label>Link Foto:</Form.Label>
                            <Form.Control placeholder="Exemplo: https://google.fotos/minhaimagem" onChange={(event) => setFotoCapa(event.target.value)} value={fotoCapa}/>
                            <Form.File style={{marginTop:10, color:'blue'}} type="file" accept="image/*" onChange={(event) => addImagem(event.target.files[0])}/>
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
                            <Form.Control type="number" onChange={(event) => setPreco(event.target.value)} value={parseFloat(preco)}/>
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
                            <Form.Control placeholder="Exemplo: https://youtube.com/meuvideo" onChange={(event) => setLinkVideo((event.target.value).replace('watch?v=','embed/'))} value={linkVideo}/>
                        </Form.Group>
                        <Form.Group controlId="controledecomentarios">
                            <Form.Label>Comentários:</Form.Label>
                            <Table striped bordered hover size="sm" variant="dark">
                                <thead>
                                    <tr>
                                        <td>Nome</td>
                                        <td>Comentário</td>
                                        <td>Excluir</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        comments.map((item) => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.mensage}</td>
                                                <td>
                                                    <Button variant="outline-danger" size="sm" onClick={()=>{removerComentario(item._id)}}>
                                                        Excluir
                                                    </Button>
                                                </td>
                                            </tr>       
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Form.Group>
                        {
                            botaoConfirmacaoAtualizar?
                                <p style={{color:'red'}}>Atualizar produto! Deseja continuar?</p>
                            :
                                <></>
                        }
                        {
                            botaoConfirmacaoExcluir?
                                <p style={{color:'red'}}>Excluir produto! Deseja continuar?</p>
                            :
                                <></>
                        }
                        {
                            dado.tipo == 'cadastrar'?
                                <Button size="sm" style={{margin:'2px'}} variant="primary" onClick={cadastrarItem}>
                                    <CheckIcon />Criar
                                </Button>
                            :
                                <>
                                    <Button style={{margin:'2px'}} variant={botaoConfirmacaoAtualizar? "warning":"info"} onClick={()=>{botaoConfirmacaoAtualizar? atualizarItem():setBotaoConfirmacaoAtualizar(true)}}>
                                        {botaoConfirmacaoAtualizar? <><CheckIcon /> Confirmar</>:<><DoneAllIcon /> Atualizar</>}
                                    </Button>
                                    <Button style={{margin:'2px'}} variant={botaoConfirmacaoExcluir? "warning":"outline-danger"} onClick={()=>{botaoConfirmacaoExcluir? excluirItem():setBotaoConfirmacaoExcluir(true)}}>
                                        {botaoConfirmacaoExcluir? <><CheckIcon /> Confirmar</>:<><DeleteForeverIcon /> Excluir</>}
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
                        {
                            linkVideo != 'nulo'?
                                <Row border="secondary" className="justify-content-center" style={{ marginTop: '5vh', borderRadius: 10 }}>
                                    <iframe style={{
                                        width: '70vw',
                                        height: '50vh',
                                        borderRadius: 10,
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    }} src={linkVideo} />
                                </Row>
                            :
                            <></>
                        }
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