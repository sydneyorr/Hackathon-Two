import React, { useContext } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";
// import { routes } from "./routes";
import 'semantic-ui-css/semantic.min.css'
import { AuthConsumer, AuthContext } from "../providers/AuthProvider";
import SplitRoutes from "./routes";
import Home from "./Home";

const NavBar = (props) => {
  let routes = SplitRoutes()


  const RightNavItems = () => {
    const history = useHistory();
    const { user, handleLogout } = useContext(AuthContext.Consumer);
    const { location } = props;
    
    if (user) {
      return (
          <Menu.Item onClick={ () => handleLogout(history) }>Logout</Menu.Item>
      )
    }
      return (
        <>
          <Link to='/login'>
            <Menu.Item active={location.pathname === '/login'}>Login</Menu.Item>
          </Link>
          <Link to='/register'>
            <Menu.Item active={location.pathname === '/register'}>Register</Menu.Item>
          </Link>
        </>
      )
    };

    const renderRoutes = () => {
      const { location } = props;
      return routes.map(({pathname, title}) => {
        return (
          <Link to={pathname}>
            <Menu.Item active={location.pathname == pathname}>{title}</Menu.Item>
          </Link>
        )
      })
    };
  

    return (
    <Menu className='ui inverted fixed menu'>
      <Link to={'/'}>
        <Menu.Item >Home</Menu.Item>
      </Link>
      <Link to={'/houses'}>
        <Menu.Item >Houses</Menu.Item>
      </Link>
      <Link to={'/costumes'}>
        <Menu.Item >Costumes</Menu.Item>
      </Link>
    {routes && renderRoutes()}
    <Menu.Menu position="right">{RightNavItems() }</Menu.Menu>
    </Menu>
    )
}



export default withRouter(NavBar);