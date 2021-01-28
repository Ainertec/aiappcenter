import React, { useEffect } from "react";
import {
    Card,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { useItem } from "../../contexts/item";


export default function CardItem({ dado }) {

    const history = useHistory();
    const handleToItem = () => {
        history.push("/nutricionistajacquelinethedim/item");
    };

    const {
        setFotoCapa,
        setNome,
        setPreco,
        setLinkPagamento,
        setDescricao,
        setLinkVideo,
        setCategoria,
        setCreatedAt,
        iniciarVariaveisItem
    } = useItem();

    function setDados(){
        setFotoCapa(dado.photo);
        setNome(dado.name);
        setPreco(dado.price);
        setLinkPagamento(dado.linkpagament)
        setDescricao(dado.description);
        setLinkVideo(dado.linkvideo);
        setCreatedAt(dado.createdAt);
        handleToItem();
    }

    useEffect(() => {
        iniciarVariaveisItem()
    }, []);

    return (
        <Card onClick={setDados} style={{borderRadius:30}}>
            <Card.Img variant="top" style={{borderRadius:30}} src={dado.photo} />
            <Card.Body>
                <Card.Title>{dado.name}</Card.Title>
                <Card.Text>
                    {dado.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{borderRadius:30}}>
                <small className="text-muted">Para acessar este item </small>
                <Button variant="info" onClick={setDados} >Clique aqui</Button>{' '}
            </Card.Footer>
        </Card>
    );
}