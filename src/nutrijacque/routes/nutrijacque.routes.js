import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeNutriJacque from "../pages/home/index";
import ItemNutriJacque from "../pages/item/index";
import LoginNutriJacque from "../pages/login/index";
import ControleNutriJacque from "../pages/controle/index";
//import Carrinho from "../pages/carrinho/index";
//import { useAuth } from "../contexts/auth";
//import Carrinho from "../pages/carrinho/index";
//import Pedido from "../pages/pedido/index";
//import HomeMcDonuts from "../pages/home/index";
//import LoginMcDonuts from "../pages/login/index";
//import CadastroMcDonuts from "../pages/cliente/index";
//import Perfil from "../pages/cliente/userUpdate";


/*function PrivateRoute({ children, ...rest }) {
  const { signed } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        signed ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/mcdonuts/login",
                state: { from: location },
              }}
            />
          )
      }
    />
  );
}*/

function rotas() {
  return (
    <Switch>
      <Route path="/nutricionistajacquelinethedim" exact component={HomeNutriJacque} />
      <Route path="/nutricionistajacquelinethedim/item" component={ItemNutriJacque} />
      <Route path="/nutricionistajacquelinethedim/login" component={LoginNutriJacque} />
      <Route path="/nutricionistajacquelinethedim/controle" component={ControleNutriJacque} />
    </Switch>
  );
}

/*<PrivateRoute path="/mcdonuts/carrinho">
        <Carrinho />
      </PrivateRoute>
      <PrivateRoute path="/mcdonuts/pedido">
        <Pedido />
      </PrivateRoute>

      <PrivateRoute path="/mcdonuts/perfil">
        <Perfil />
      </PrivateRoute>
      */

export default rotas;
