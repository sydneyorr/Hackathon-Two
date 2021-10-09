import React from "react";

const MyCostume = ({ costume }) => {
  return (
    <Card>
      <div>
        <Image src={costume.image} />
        <Card.Header>{costume.title}</Card.Header>
        <Card.Meta>Votes: {costume.votes}</Card.Meta> 
      </div>
      <Card.Content extra>
        <Vote costume={costume}/>
      </Card.Content>
    </Card>
  );

};

export default MyCostume;
