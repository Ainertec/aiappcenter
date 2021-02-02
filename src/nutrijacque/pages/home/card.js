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
        setId,
        setFotoCapa,
        setNome,
        setPreco,
        setLinkPagamento,
        setDescricao,
        setLinkVideo,
        setCreatedAt,
        setComments,
        iniciarVariaveisItem
    } = useItem();

    function setDados(){
        setId(dado._id);
        setFotoCapa(dado.photo);
        setNome(dado.name);
        setPreco(dado.price);
        setLinkPagamento(dado.linkpagament)
        setDescricao(dado.description);
        setLinkVideo(dado.linkvideo);
        setCreatedAt(dado.createdAt);
        setComments(dado.comments);
        handleToItem();
    }

    useEffect(() => {
        iniciarVariaveisItem()
    }, []);

    return (
        <Card onClick={setDados} style={{borderRadius:30}}>
            <Card.Img variant="top" style={{borderRadius:30, maxHeight:'50vh'}} src={dado.photo} />
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