  import axios from "axios";
  import Costume from "../components/Costume";
  import React, { useState, useEffect, useContext } from "react";
  import { AuthContext } from "../providers/AuthProvider";
import { Card } from "semantic-ui-react";

  const CostumesLead = () => {
    const {user}=useContext( AuthContext )
    useEffect(() => {
    getCostumes();
  }, []);

  const [costumes, setCostumes] = useState([]);

  const getCostumes = async () => {
    try{
      let res = await axios.get(`/api/costumes/all`);
      setCostumes(res.data);
      console.log('coustme', res.data);
      } catch (error) {
        console.log(error)
        alert("error")
    }
  };

  const deleteCostumes = async (id) => {
    try {
      await axios.delete(`/api/users/${user.id}/costumes/${id}`);
      setCostumes(costumes.filter);
    } catch (error) {
      console.log(error);
    }
  };

  const renderCostumes = () => {
    return costumes.map( costume => {
      return (
        <Costume costume={costume}/>
      )
    })
  };

    return (

    <div>
      <h1> Costumes! </h1>
      <Card.Group itemsPerRow = {3}>
        {renderCostumes()}
      </Card.Group>
    </div>
  );
};

export default CostumesLead;