import React, {useState} from "react";
import {
    Navbar,
    Nav,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import { useBuscaItem } from "../../contexts/buscaItem";
import { useProgresso } from "../../contexts/prog";
import { useAlert } from '../../contexts/alertN';
import { useValidation } from '../../validation/validation';

import Api from "../../services/api";

import SecurityIcon from '@material-ui/icons/Security';
import SearchIcon from '@material-ui/icons/Search';

export default function NavBar() {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const { validaCampoText } = useValidation();
    const {
        setItems,
        iniciarVariavelBuscaItem
    } = useBuscaItem();
    const [busca, setBusca] = useState('');

    function notificacaoNavBar(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    const history = useHistory();
    const handleToLogin = () => {
        history.push("/nutricionistajacquelinethedim/login");
    };

    async function buscarProdutos(){
        iniciarVariavelBuscaItem();
        if(validaCampoText([busca])){
            await setProgresso(true);
            await Api.get(`items/${busca}`).then(response => {
                setItems([{name:'',items:response.data}]);
            }).catch(error => {
                try {
                    if(error.response.status){
                        notificacaoNavBar(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoNavBar(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
        }else{
            notificacaoNavBar(`Preencha o campo de busca!`, 'danger');   
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Navbar.Brand>
                <img
                    style={{ borderRadius: 30, maxWidth: 30, boxShadow: "3px 3px 8px black" }}
                    src="https://i.ibb.co/ZKhr9x3/download.png"
                /> <span style={{ textShadow: '0.1em 0.1em 0.2em black'}}>Jacqueline Thedim</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{marginLeft:'10vw', marginTop:'1vh'}}>
                    <InputGroup className="mb-2" style={{minWidth:'40vw', borderRadius:30 }}>
                        <FormControl
                            placeholder="Exemplo: Curso de alimentação"
                            style={{borderTopLeftRadius:30, borderBottomLeftRadius:30}}
                            onChange={(event) => setBusca(event.target.value)}
                        />
                        <InputGroup.Append>
                            <Button onClick={buscarProdutos} style={{borderTopRightRadius:30, borderBottomRightRadius:30}} size="sm" variant="outline-light"><SearchIcon /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Nav>
                <Nav>
                    <Nav.Link href="" onClick={handleToLogin}><SecurityIcon /> Área do administrador</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}