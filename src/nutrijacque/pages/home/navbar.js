import React from "react";
import {
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

import SecurityIcon from '@material-ui/icons/Security';
import SearchIcon from '@material-ui/icons/Search';

export default function NavBar() {
    const history = useHistory();
    const handleToLogin = () => {
        history.push("/nutricionistajacquelinethedim/login");
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Navbar.Brand href="#home">
                <img
                    style={{ borderRadius: 30, maxWidth: 30 }}
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                /> Jacqueline Thedim
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{marginLeft:'10vw', marginTop:'1vh'}}>
                    <InputGroup className="mb-2" style={{minWidth:'40vw', borderRadius:30 }}>
                        <FormControl
                            placeholder="Exemplo: Curso de alimentação"
                            style={{borderTopLeftRadius:30, borderBottomLeftRadius:30}}
                        />
                        <InputGroup.Append>
                            <Button style={{borderTopRightRadius:30, borderBottomRightRadius:30}} size="sm" variant="outline-light"><SearchIcon /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Nav>
                <Nav>
                    <Nav.Link href="#" onClick={handleToLogin}><SecurityIcon /> Área do administrador</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}