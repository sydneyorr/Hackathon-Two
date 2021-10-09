import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Housepage = () => {
  const {user} = useContext(AuthContext)
  const [myHouse, setMyHouse] = useState({})

  useEffect(()=>{
    getHouse()
  },[])

  const getHouse = async () => {
    try{
      let res = await axios.get(`/api/users/${user.id}/user_house`)
      setMyHouse(res.data)
    }catch(err){
      console.log(err)
    }
  }

  //display all costumes that have visited that house
  //if user.house.id == visit.house_id,
  //display costume.id that matchces visit.costume_id

  return(
    <>
    <Card>
        <Image src={myHouse.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{myHouse.city}</Card.Header>
          <Card.Meta>
            <span className='date'>{myHouse.state}</span>
          </Card.Meta>
          <Card.Description>
            {myHouse.street}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )

}

export default Housepage

//chanell_howell@reichert.org