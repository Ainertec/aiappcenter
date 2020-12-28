import React from "react";
import {
    Card,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

export default function CardItem() {

    const history = useHistory();
    const handleToItem = () => {
        history.push("/nutricionistajacquelinethedim/item");
    };

    return (
        <Card onClick={handleToItem}>
            <Card.Img variant="top" src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/125829188_3399972053560558_5432571439931089616_n.jpg?_nc_cat=111&cb=846ca55b-ee17756f&ccb=2&_nc_sid=a26aad&_nc_ohc=XvvLIfe-ma8AX-b5E9P&_nc_ht=scontent-gig2-1.xx&oh=5a80dc72bdf24896e0ad835e86010fa7&oe=600DFDAB" />
            <Card.Body>
                <Card.Title>Novo curso de emagrecimento</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natu...
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Para acessar este item </small>
                <Button variant="info">Clique aqui</Button>{' '}
            </Card.Footer>
        </Card>
    );
}