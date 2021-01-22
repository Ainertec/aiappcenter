import React from "react";
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function NavBar() {
    const history = useHistory();
    const handleToHome = () => {
        history.push("/nutricionistajacquelinethedim/");
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Navbar.Brand href="#home">
                <img
                    style={{ borderRadius: 30, maxWidth: 30 }}
                    src="data:image/png;base64,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"
                /> Jacqueline Thedim
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Nav>
                    <Nav.Link href="#" onClick={handleToHome}><ExitToAppIcon /> Sair</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}