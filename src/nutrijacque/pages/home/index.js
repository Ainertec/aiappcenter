import React, { useEffect }  from "react";
import {
    Image,
    Row,
    Container,
    CardColumns,
    Card,
    Alert,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useBuscaItem } from "../../contexts/buscaItem";
import { useProgresso } from "../../contexts/prog";
import Carregando from "../../components/progress/carregando";
import Notification from "../../components/notification/notification";
import { useAlert } from '../../contexts/alertN';

import { Fade, FadeCard, FadeImg, FadeText, FadeCarrousel, FadeNavBar } from './style';

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import Api from "../../services/api";

import NavBar from './navbar';
import Carrousel from './carousel';
import CardItem from './card';
import FooterHome from './footer';
import InfoHome from './info';

export default function Home() {
    const { setProgresso } = useProgresso();
    const { 
        setAbrir,
        setMsg,
        setType,
    } = useAlert();
    const {
        items,
        setItems,
        iniciarVariavelBuscaItem
    } = useBuscaItem();


    function notificacaoHome(mensagem, tipo) {
        setType(tipo)
        setMsg(mensagem);
        setAbrir(true);
    }

    useEffect(() => {
        async function carregarProdutos() {
            await iniciarVariavelBuscaItem();
            await setProgresso(true);
            await Api.get('categorys').then(response => {
                setItems(response.data);
            }).catch(error => {
                try {
                    if(error.response.status){
                        notificacaoHome(`Tivemos um problema: ${error}.`, 'danger');
                    }
                } catch (error) {
                    notificacaoHome(`Tivemos um problema: Servidor indisponivel!`, 'danger');   
                }
            });
            await setProgresso(false);
          }
          carregarProdutos();
    }, []);

    return (
        <div>
            <FadeNavBar>
                <NavBar />
            </FadeNavBar>
            <Container fluid>
                <Notification />
                <Carregando />
                <FadeCarrousel>
                    <Carrousel />
                </FadeCarrousel>
                <Fade>
                    <InfoHome />
                </Fade>
                <div style={{ marginBottom: '15vh', marginTop: '20vh', marginRight: '10vw', marginLeft: '10vw' }}>
                    {
                        items.map((option) =>(
                            <>
                                <h3 style={{ textAlign: 'center', marginTop: '15vh' }}>{option.name}</h3>
                                <hr />
                                <CardColumns>
                                    {option.items.map((option2) => (
                                        <FadeCard>
                                            <CardItem dado={option2} key={option2._id}/>
                                        </FadeCard>
                                    ))}
                                </CardColumns>
                            </>
                        ))
                    }
                    {
                        items[0]?
                            null
                        :
                            <Alert variant="warning">
                                <SentimentVeryDissatisfiedIcon /> Nenhum produto disponível!
                            </Alert>
                    }
                </div>
                <Card>
                    <Card.Body style={{ opacity: 0.8, backgroundRepeat: 'no-repeat', backgroundSize: '100vw', backgroundImage: 'url("https://i.ibb.co/8m40M4w/64747668-2874961069394995-8285739337077751808-n.png")' }}>
                        <Row className="justify-content-center">
                            <FadeImg>
                                <Image style={{ opacity: 1, width: '18vh', marginTop: '8vh', borderRadius: 20, boxShadow: "5px 5px 5px black" }} src="https://i.ibb.co/xspvVhk/133115937-3426915024199594-7142885507613308075-o.jpg" />
                            </FadeImg>
                        </Row>
                        <div style={{ padding: '1vw', backgroundColor: '#000', borderRadius: 20, marginTop: '2vh', }}>
                            <h5 style={{ textAlign: "center", marginBottom: '5vh', color: '#FFF' }}>Jacqueline Thedim</h5>
                            <p style={{ marginRight: '10vw', marginLeft: '10vw', textAlign: 'center', color: '#FFF' }}>
                                <FadeText>
                                "Sou simplesmente apaixonada pela minha missão de Nutri! Mudar a vida das pessoas através da alimentação é incrível! Sabemos que uma alimentação saudável pode gerar muitos benefícios em nossa saúde, mas o que muita gente não sabe é que isto pode ser simples e descomplicado. E esta é minha missão ajudar as pessoas a mudarem seu comportamento em relação à comida para ter mais saúde, mais disposição, melhorar a auto estima, parar de brigar com a balança, e assim aprender a comer de tudo e ter um peso saudável.
                                </FadeText>
                                <FadeText>
                                Faço sim a 10 anos com muito carinho, dedicação e responsabilidade! Sou especialista em Nutrição Funcional, em obesidade e emagrecimento e trabalho com nutrição comportamental.
                                </FadeText>
                                <FadeText>
                                Trabalho sempre com avaliação física completa, porque mais que o peso é necessário também avaliar a qualidade deste peso. Assim medidas e saber como está sua massa gorda e magra é super importante.
                                </FadeText>
                                <FadeText>
                                Minhas orientações, planos alimentares ou dietas, são sempre individuais, personalizadas e montadas junto com meu paciente, para que ele possa opinar e entender todo o processo de mudança de alimentação.
                                </FadeText>
                                <FadeText>
                                Então vamos melhorar sua alimentação...."
                                </FadeText>
                            </p>
                            <div style={{ marginRight: '10vw', marginLeft: '10vw' }} className="blockquote-footer">
                                <cite>·QUARTA-FEIRA, 19 DE JUNHO DE 2019·</cite>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <iframe className="w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.9839984470989!2d-42.53371164127808!3d-22.2792021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978bb147eb5dcf%3A0xca79e78e1943f46e!2sNutricionista%20Jacqueline%20Thedim!5e0!3m2!1spt-BR!2sbr!4v1609108847949!5m2!1spt-BR!2sbr" style={{ height: '50vh', frameborder: 0, border: 0, allowfullscreen: "", ariaHidden: "false", tabindex: 0, marginTop:'10vh', marginBottom:'10vh' }} />
            </Container>
            <FooterHome />
        </div>
    );
}