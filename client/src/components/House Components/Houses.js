import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'

const Houses = () => {
const [houses, setHouses] = useState([]);

const getHouses = async () => {
  try {
    let res = await axios.get("/api/houses")
    setHouses(res.data)
  } catch (err) {
    console.log(err)
  }
}

useEffect(()=>{
  getHouses();
},[])

const renderHouses = () => {
  return (
    houses.map((h) => {
      return (
        <Card>
        <Image src={h.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{h.city}</Card.Header>
          <Card.Meta>
            <span className='date'>{h.state}</span>
          </Card.Meta>
          <Card.Description>
            {h.street}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {h.visits}
          </a>
        </Card.Content>
      </Card>
      )
    })
  )
}
 
  return (
    <div>
      <h1>House Home</h1>
      {renderHouses()}
    </div>
  );
};

export default Houses;