import React from "react";
import {
    Card,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

export default function CardItem({ dado }) {

    const history = useHistory();
    const handleToItem = () => {
        history.push("/nutricionistajacquelinethedim/item");
    };

    return (
        <Card onClick={handleToItem} style={{borderRadius:30}}>
            <Card.Img variant="top" style={{borderRadius:30}} src={dado.photo} />
            <Card.Body>
                <Card.Title>{dado.name}</Card.Title>
                <Card.Text>
                    {dado.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{borderRadius:30}}>
                <small className="text-muted">Para acessar este item </small>
                <Button variant="info">Clique aqui</Button>{' '}
            </Card.Footer>
        </Card>
    );
}