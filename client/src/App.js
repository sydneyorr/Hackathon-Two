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
    <FetchUser>
      <NavBar />
        <Container>
          <Switch>
            {routes && renderRoutes()}
            <Route exact path = '/' component={Home} />
            <Route exact path = "/houses" component={Houses} /> 
            <Route exact path = "/costumes" component={CostumesLead} />
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </FetchUser>
    </>
  );
}

export default App;
