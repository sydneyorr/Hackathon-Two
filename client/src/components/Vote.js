import axios from "axios";
import React, { useContext, useReducer } from "react";
import { Button } from "semantic-ui-react"
import { AuthContext } from "../providers/AuthProvider";
import Costume from "./Costume"



const Vote = ({costume}) => {
  const {user} = useContext(AuthContext)

  const saveVotes = async () => {
    try{
    let res = await axios.put(`/api/users/${costume.user_id}/costumes/${costume.id}`, {
      user_id: costume.user_id,
      votes: votes + 1
    });
    console.log("HERE IS RES", res)
    } catch (err) {
      console.log(err)
    }
  }
  
    const voteSave = () =>
    {dispatch("add");
    saveVotes(votes)}
  
    const [votes, dispatch] = useReducer((state, action) => {
      switch (action) {
        case "add":
          return state + 1;
      }
    }, costume.votes);
  
    return (
      <p>
        {votes}
        <i class="heart icon"
         onClick={() => {voteSave()}}/>
      </p>
    );
  };


export default Vote





