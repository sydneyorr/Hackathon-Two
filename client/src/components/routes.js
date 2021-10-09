import React, { useContext } from "react"
import CostumesLead from "../pages/CostumesLead"
import { AuthContext } from "../providers/AuthProvider";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Register from "./Register";
import Things from "./Things";
import Housepage from "../pages/Housepage";


const SplitRoutes = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  if(user){
    let routes = []
    if(user.house){
      routes.push({ pathname: "/myHouse", title: "My House", component: Housepage}) 
    }
    if(user.costume){
      routes.push({ pathname: "/costumes", title: "Costume", component: CostumesLead})
    }
    // console.log('routes',routes)
    return routes
}
}




export default SplitRoutes