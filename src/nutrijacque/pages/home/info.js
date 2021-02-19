import React from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Container
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


export default function InfoHome() {
    return (
        <Container fluid style={{ opacity: 0.9, backgroundColor: '#17a2b8', padding: '2vh', color:'#FFF', borderTopLeftRadius: '8vw', borderBottomRightRadius: '8vw', marginTop: '10vh' }}>
            <Card bg="info" border="light" style={{borderTopLeftRadius: '8vw', borderBottomRightRadius: '8vw'}}>
                <Card.Body>
                    <h4 style={{textAlign:'center', marginTop:'5vh', marginBottom:'5vh', textShadow: '0.1em 0.1em 0.2em black'}}>Entre em contato ou veja mais sobre Jacqueline Thedim</h4>
                    <h5 style={{textAlign:'center', textShadow: '0.1em 0.1em 0.2em black'}}>Jacqueline Thedim</h5>
                    <h6 style={{textAlign:'center', textShadow: '0.1em 0.1em 0.2em black'}}>CRN 08101700</h6>
                    <h5 style={{textAlign:'center', marginBottom:'5vh', textShadow: '0.1em 0.1em 0.2em black'}}>Nutricionista Clínica Funcional e Comportamental</h5>
                    <Row>
                        <Col>
                            <Card.Img variant="top" style={{borderTopLeftRadius: '8vw', borderBottomRightRadius: '8vw'}} src="https://i.ibb.co/7nvW8k0/78536840-3028078534083247-390361747808059392-o.jpg" />
                        </Col>
                        <Col>
                            <Button onClick={()=> window.open('https://api.whatsapp.com/send?1=pt_BR&phone=5522998361425', '_blank')} variant="success" style={{height:'20vh', borderTopLeftRadius: '8vw', borderBottomRightRadius: '8vw', boxShadow: "5px 5px 8px black"}} size="lg" block>
                               <h6 style={{ textShadow: '0.1em 0.1em 0.2em black'}}><WhatsAppIcon /> WhatsApp</h6>
                            </Button>
                            <Button onClick={()=> window.open('https://www.facebook.com/jacquelinethedimnutricionista/', '_blank')}  variant="primary" style={{height:'20vh', borderTopLeftRadius: '8vw', borderBottomRightRadius: '8vw', boxShadow: "5px 5px 8px black"}} size="lg" block>
                                <h6 style={{ textShadow: '0.1em 0.1em 0.2em black'}}><FacebookIcon /> Facebook</h6>
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    );
}