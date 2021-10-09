import React from "react";
import { Card, Image } from 'semantic-ui-react';

const Costume = ({ costume }) => {
  return (
    <Card>
      <div>
        <Image src={costume.image} />
        <Card.Header>{costume.title}</Card.Header>
        <Card.Meta>Votes: {costume.votes}</Card.Meta> 
      </div>
    </Card>
  );

};

export default Costume;

// when a costume visits a house, we want that visit to display on the house profile
// the house can then vote on the costume
// add king size, bag of skittles, and bite size votes, and toothbrush
// the updated votes will show on 