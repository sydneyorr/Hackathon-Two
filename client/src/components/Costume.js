import React from "react";
import { Card, Image } from 'semantic-ui-react';

const Costume = ({ costume }) => {
  return (
    <Card>
      <div>
        <h1>Costumes!</h1>
        <Image src={costume.image} />
        <Card.Header>{costume.title}</Card.Header>
        <Card.Description></Card.Description>


      </div>
    </Card>
  );

};

export default Costume;