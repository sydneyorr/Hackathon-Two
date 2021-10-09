import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router";
// import { routes } from "./components/routes";
import SplitRoutes from "./components/routes";
import NavBar from "./components/NavBar.js";
import NoMatch from "./components/NoMatch";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Houses from "./components/House Components/Houses";
import CostumesLead from "./pages/CostumesLead";
import ImageUpload from "./components/ImageUpload";
import NewHouse from "./components/House Components/NewHouse";
import styled from 'styled-components';

function App() {
  console.log(SplitRoutes())
  let routes = SplitRoutes()

const renderRoutes = () => {
  return routes.map((route)=> (
    <Route exact path = {route.pathname} component={route.component} />
  ))
}




  return (
    <>
    <MyDiv>
    <FetchUser>
      <NavBar />
        <Container>
          <Switch>
            {routes && renderRoutes()}
            <ProtectedRoute exact path = '/' component={Home} />
            <Route exact path = "/houses" component={Houses} /> 
            <Route exact path = "/costumes" component={CostumesLead} />
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/login" component={Login} />s
            <Route exact path = "/upload" component={NewHouse} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
      </MyDiv>
    </>
  );
}

const MyDiv = styled.div`
  background-image: url('https://cdn.gamedevmarket.net/wp-content/uploads/20200625115918/90fa4684554002bc3cdc3575b0899348.jpg');
  height: 200vh;
  width: 100vw;
  background-attachment: fixed;
  overflow: scroll;
  color: #ED7014;
  `

export default App;
