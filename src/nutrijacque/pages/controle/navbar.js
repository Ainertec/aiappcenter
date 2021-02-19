import React from "react";
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../contexts/auth";
import { useAlert } from '../../contexts/alertN';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function NavBar() {
    const { signOut } = useAuth();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();

    function notificacaoNavBar(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    const handleMenuSignOut = () => {
        signOut();
        notificacaoNavBar('Logout efetuado com sucesso!','success');
      };

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Navbar.Brand>
                <img
                    style={{ borderRadius: 30, maxWidth: 30 }}
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                /> Jacqueline Thedim
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link type="button" onClick={handleMenuSignOut}><ExitToAppIcon /> Sair</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}