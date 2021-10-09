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
    <Card>
      <Card.Header>
        {user.name}
        </Card.Header>
        <Card.Meta>
          {myCostume.title}
          </Card.Meta>
      <div>
        <Image src={myCostume.image} />
        <Card.Header>{myCostume.title}</Card.Header>
        <Card.Meta>Votes: {myCostume.votes}</Card.Meta> 
      </div>
    </Card>
  );

};

export default MyCostume;
