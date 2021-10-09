import React from "react"
import Home from "./Home";
import Houses from "./House Components/Houses";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Register from "./Register";
import Things from "./Things";

export const routes = [
  { pathname: "/", title: "Home", component: Home},
  { pathname: "/things", title: "Things", component: Things},
  { pathname: "/houses", title: "All Houses", component: Houses},
];
