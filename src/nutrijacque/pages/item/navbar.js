import React from "react";
import {
    Navbar,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


export default function NavBar() {

    const history = useHistory();
    const handleToHome = () => {
        history.push("/nutricionistajacquelinethedim/");
    };
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Navbar.Brand type="button" onClick={handleToHome}>
                <img
                    style={{ maxWidth: 30, borderRadius: 30 }}
                    className="mr-3"
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                />
                <ArrowBackIcon /> Voltar
            </Navbar.Brand>
        </Navbar>
    );
}