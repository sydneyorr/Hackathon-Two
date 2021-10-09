import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card, Image } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const MyCostume = () => {
  const { user } = useContext(AuthContext)
  const [myCostume, setMyCostume] = useState([])

  useEffect(() => {
    getMyCostume();
  }, []);

  const renderCostumes = () => {
    return myCostume.map((c) => {
     return(
      <Card>
      <Card.Header>
        {user.name}
        </Card.Header>
        <Card.Meta>
          {c.title}
          </Card.Meta>
      <div>
        <Image src={c.image} />
        <Card.Header>{c.title}</Card.Header>
        <Card.Meta>Votes: {c.votes}</Card.Meta> 
      </div>
    </Card>
     )
    })
  }

  const getMyCostume = async () => {
    try{ 
      let res = await axios.get(`/api/users/${user.id}/costumes/`)
    console.log(res.data)
    setMyCostume(res.data)
  } catch(err) {
    console.log(err)
  }
}

  // console.log("costume", costume)
  return (
    <div>
      {myCostume && renderCostumes()}
    </div>
  );

};

export default MyCostume;
