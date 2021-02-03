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
                    <Image style={{ marginLeft:'45%', marginTop: '8vh', height:'5%' }} src="https://i.ibb.co/CP1X9Gy/1bdc4bd83aa89756f85fcb1588675971.gif" />
                    <Row>
                        <Col>
                            <h5 style={{textAlign:'center'}}>Carregando...</h5>
                        </Col>    
                    </Row>
                </Container>
            </Backdrop>
        </div>
    );
}