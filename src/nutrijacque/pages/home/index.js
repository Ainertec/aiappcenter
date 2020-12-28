import React from "react";
import {
    Image,
    Row,
    Container,
    CardDeck,
    Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './navbar';
import Carrousel from './carousel';
import CardItem from './card';
import FooterHome from './footer';

export default function Home() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Carrousel />
                <div style={{ marginBottom: '5vh', marginTop: '10vh', marginRight: '10vw', marginLeft: '10vw' }}>
                    <h3 style={{ textAlign: 'center', marginTop: '4vh' }}>Cursos</h3>
                    <hr />
                    <CardDeck>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </CardDeck>
                    <h3 style={{ textAlign: 'center', marginTop: '4vh' }}>Ebooks</h3>
                    <hr />
                    <CardDeck>
                        <CardItem />
                        <CardItem />
                        <CardItem />
                    </CardDeck>
                </div>
                <Card>
                    <Card.Body style={{ opacity: 0.8, backgroundRepeat: 'no-repeat', backgroundSize: '100vw', backgroundImage: 'url("https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/64747668_2874961069394995_8285739337077751808_n.png?_nc_cat=103&ccb=2&_nc_sid=dd9801&_nc_ohc=1KZTX9KpBBcAX9wEZ6R&_nc_ht=scontent-gig2-1.xx&oh=13f3b9eb2facf147cc495a0ec24d3c55&oe=600D7A13")' }}>
                        <Row className="justify-content-center">
                            <Image style={{ opacity: 1, width: '18vw', marginTop: '8vh', borderRadius: 20, boxShadow: "5px 5px 5px black" }} src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/s960x960/133115937_3426915024199594_7142885507613308075_o.jpg?_nc_cat=106&ccb=2&_nc_sid=9e2e56&_nc_ohc=t7FeOQnshQQAX8cXERw&_nc_ht=scontent-gig2-1.xx&tp=7&oh=a059344058696b09eae6609c1ba02fec&oe=600CDB1B" />
                        </Row>
                        <div style={{ padding: '1vw', backgroundColor: '#000', borderRadius: 20, marginTop: '2vh', }}>
                            <h5 style={{ textAlign: "center", marginBottom: '5vh', color: '#FFF' }}>Jacqueline Thedim</h5>
                            <p style={{ marginRight: '10vw', marginLeft: '10vw', textAlign: 'center', color: '#FFF' }}>
                                "Sou simplesmente apaixonada pela minha missão de Nutri! Mudar a vida das pessoas através da alimentação é incrível! Sabemos que uma alimentação saudável pode gerar muitos benefícios em nossa saúde, mas o que muita gente não sabe é que isto pode ser simples e descomplicado. E esta é minha missão ajudar as pessoas a mudarem seu comportamento em relação à comida para ter mais saúde, mais disposição, melhorar a auto estima, parar de brigar com a balança, e assim aprender a comer de tudo e ter um peso saudável.
                                Faço sim a 10 anos com muito carinho, dedicação e responsabilidade! Sou especialista em Nutrição Funcional, em obesidade e emagrecimento e trabalho com nutrição comportamental.
                                Trabalho sempre com avaliação física completa, porque mais que o peso é necessário também avaliar a qualidade deste peso. Assim medidas e saber como está sua magra gorda e magra é super importante.
                                Minhas orientações, planos alimentares ou dietas, são sempre individuais, personalizadas e montadas junto com meu paciente, para que ele possa opinar e entender todo o processo de mudança de alimentação.
                                Então vamos melhorar sua alimentação...."
                            </p>
                            <div style={{ marginRight: '10vw', marginLeft: '10vw' }} className="blockquote-footer">
                                <cite>·QUARTA-FEIRA, 19 DE JUNHO DE 2019·</cite>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.9839984470989!2d-42.53371164127808!3d-22.2792021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978bb147eb5dcf%3A0xca79e78e1943f46e!2sNutricionista%20Jacqueline%20Thedim!5e0!3m2!1spt-BR!2sbr!4v1609108847949!5m2!1spt-BR!2sbr" style={{ height: '50vh', frameborder: 0, border: 0, allowfullscreen: "", ariaHidden: "false", tabindex: 0 }} />
            </Container>
            <FooterHome />
        </div>
    );
}