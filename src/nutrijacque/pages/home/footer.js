import React from "react";
import {
    Row,
    Col,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function FooterHome() {
    return (
        <Container fluid style={{ backgroundColor: '#17a2b8', padding: '2vh', color: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: '5vh' }}>
            <Row className="justify-content-center">
                <img
                    style={{ borderRadius: 30, maxWidth: 40, marginRight: 5 }}
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                />
                <h4> Jacqueline Thedim</h4>
            </Row>
            <Row className="justify-content-center">
                <p><MailOutlineIcon /> Email: nutricionistajacquelinethedim@hotmail.com</p>
            </Row>
            <Row className="justify-content-center">
                <p><PhoneIcon /> Tel.:(22) 99836-1425 <WhatsAppIcon /></p>
            </Row>
            <Row className="justify-content-center" style={{backgroundColor:'rgba(0, 0, 0, 0.6)', borderRadius:30}}>
                <div style={{ marginRight: '10vw', marginLeft: '10vw' }} className="blockquote-footer">
                    <a href="#">
                        <cite>Ainertec</cite>
                    </a>
                </div>
            </Row>
        </Container>
    );
}