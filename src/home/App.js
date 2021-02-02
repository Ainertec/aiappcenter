import React from 'react';
import {
  makeStyles,
  Container,
  AppBar,
  Toolbar,
  Box,
  Typography
} from '@material-ui/core/';
import Item from './item';


const Link = [
  {
    id: 1,
    linkImg: "https://i.ibb.co/ZKhr9x3/download.png",
    name: "Nutricionista Jacqueline Thedim",
    regiao: "Nova Friburgo",
    linkNav: "/nutricionistajacquelinethedim/",
  }
]


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  styleNavbar: {
    backgroundColor: '#000',
    borderRadius: 30,
    boxShadow: "0 2px 5px 5px rgba(0, 0, 0, .3)",
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '60%',
    margin: 10,
    borderRadius: 10,
    boxShadow: "0 2px 5px 5px rgba(0, 0, 0, .3)",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.styleNavbar}>
        <Toolbar>
          Bem vindo!
            </Toolbar>
      </AppBar>
      <Container maxWidth="md" disableGutters>
        <Box
          justifyContent="center"
          flexWrap="wrap"
          display="flex"
        >
          <img
            className={classes.img}
            src="https://lh3.googleusercontent.com/pw/ACtC-3cR4kSFRtsReECUoSjxpaa39WLE-6YF8-y9_pX3fW7wx7qbtkGKK-2IF8IDekvHlcOsmv5FQ6rCfpA0mRzD7CMUT3ix_kYvy3Foi6DNxRrv8kXtKhJeQ36k6KHKgIuJFns_gTITYBybbnBvOwoj2vUh=w960-h720-no"
          />
        </Box>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'center', marginTop: 30, marginBottom: 30, }}>
          Aqui você encontra os melhores estabelecimentos
      </Typography>
        <Box
          justifyContent="center"
          flexWrap="wrap"
          display="flex"
        >
          {Link.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </div>
  );
}