import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Housepage = () => {
  const {user} = useContext(AuthContext)

  //display all costumes that have visited that house
  //if user.house.id == visit.house_id,
  //display costume.id that matchces visit.costume_id

  return(
    <>
    <h1> {user.name} </h1>



    </>

  )

}

export default Housepage

//chanell_howell@reichert.org