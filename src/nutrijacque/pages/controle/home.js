import React, { useState } from "react";
import {
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Notification from "../../components/notification/notification";


export default function HomeControle() {
    return (
        <Container fluid>
            <Notification />
            <Row style={{marginTop:'20vh'}} className="justify-content-center">
                <img
                    style={{ borderRadius: 30 }}
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                />
            </Row>
            <h3 style={{textAlign:'center', marginTop:'5vh'}}> Bem vindo ao controle!</h3>
        </Container>
    );
}