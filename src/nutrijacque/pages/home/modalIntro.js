import React, {useState} from "react";
import {
    Modal,
    Button,
    Container,
    Row,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import CloseIcon from '@material-ui/icons/Close';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

export default function ModalIntroHome() {
    const [show, setShow] = useState(true);

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <p>Nutricionista Jacque Thedim</p>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="justify-content-center">
                        <img src="https://i.ibb.co/ZKhr9x3/download.png" style={{height:'20vh'}}/>
                        <img src="https://i.ibb.co/xspvVhk/133115937-3426915024199594-7142885507613308075-o.jpg" style={{height:'20vh'}} />
                    </Row>
                    <h4 style={{marginTop:'5vh', textAlign:'center'}}>Seja muito bem vindo(a)!</h4>
                    <h6 style={{marginTop:'5vh', textAlign:'center', color:'blue'}}><ContactSupportIcon/> Precisa de ajuda para efetuar sua compra? Acesse o vídeo abaixo para entender melhor!</h6>
                    <iframe style={{
                        width: '100%',
                        height: '25vh',
                        borderRadius: 10,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    }} src="https://www.youtube.com/embed/-3s_YFDXHNY" />
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    <CloseIcon /> Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}