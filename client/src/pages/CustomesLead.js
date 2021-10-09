  import axios from "axios";
  import Costume from "./costume";
  import React, { useState, useEffect, useContext, AuthContext } from "react";

  const Costumes = () => {
    const {user}=useContext( AuthContext )
    useEffect (() => {
    getCostumes();
  }, []);

  const [costumes, setCostumes] = useState([]);

  const getCostumes = async () => {
    try{
      let res = await axios.get(`/api/users/${user.id}/costume`);
      setCostumes(res.data);
      console.log(res.data);
      } catch (error) {
        console.log(error)
        alert("error")
    }
  };

  const deleteCostumes = async (id) => {
    try {
      await axios.delete(`/api/users/${user.id}/costume/${id}`);
      setCostumes(costumes.filter);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCostumes = () => {
    return costumes.map( costumes => {
      return (
        <div key={costume.id}>
        </div>
      )
    })
  };

    return (

    <div>
        {renderCostumes()}
    </div>
  );
};

export default CustomesLead;