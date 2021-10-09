import React, { useContext } from "react"
import Costume from "../pages/Costume";
import { AuthContext } from "../providers/AuthProvider";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Register from "./Register";
import Things from "./Things";


const SplitRoutes = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  if(user){
    let routes = []
    if(user.house){
      routes.push({ pathname: "/things", title: "Things", component: Things}) 
    }
    if(user.costume){
      routes.push({ pathname: "/costumes", title: "Costume", component: Costume})
    }
    // console.log('routes',routes)
    return routes
}
}




export default SplitRoutes