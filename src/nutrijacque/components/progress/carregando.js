import React from 'react';
import {
    Image,
    Row,
    Col,
    Container,
} from 'react-bootstrap';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import { useProgresso } from "../../contexts/prog";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function Carregando() {
    const classes = useStyles();
    const { progresso } = useProgresso();

    return (
        <div>
            <Backdrop className={classes.backdrop} open={progresso}>
                <Container>
                    <h4 style={{textAlign:'center'}}>Carregando...</h4>
                    <Row className="justify-content-center">
                        <Image style={{height:'20vh', opacity: 0.9}} src="https://i.ibb.co/CP1X9Gy/1bdc4bd83aa89756f85fcb1588675971.gif" />   
                    </Row>
                </Container>
            </Backdrop>
        </div>
    );
}