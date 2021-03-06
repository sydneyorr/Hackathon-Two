import React from "react";
import { Card, Image } from 'semantic-ui-react';
import Vote from "./Vote";

const Costume = ({ costume }) => {

  
  return (
    <Card>
      <Card.Header>
        {costume.user}
        </Card.Header>
        <Card.Meta>
          {costume.title}
          </Card.Meta>
      <div>
        <Image 
        src={costume.image} 
        style={{height:"400px"}}/>
        <Card.Header>{costume.title}</Card.Header>
      </div>
      <Card.Content extra>
        <Vote costume={costume}/>
      </Card.Content>
    </Card>
  );

};

export default Costume;

// when a costume visits a house, we want that visit to display on the house profile
// the house can then vote on the costume
// add king size, bag of skittles, and bite size votes, and toothbrush
// the updated votes will show on 