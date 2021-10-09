import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Grid, GridColumn, Icon, Image } from 'semantic-ui-react'

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
      </Card>
      )
    })
  )
}
 
  return (
    <div>
      <h1>House Home</h1>
      <Card.Group itemsPerRow = {3}>
      {renderHouses()}
      </Card.Group>
    </div>
  );
};

export default Houses;

{/* <Grid>
<Grid.Row columns={3}>
  <Grid.Column>
    <Image src='/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='/images/wireframe/image.png' />
  </Grid.Column>
  <Grid.Column>
    <Image src='/images/wireframe/image.png' />
  </Grid.Column>
</Grid.Row> */}