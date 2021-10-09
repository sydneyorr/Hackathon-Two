import axios from "axios";
import { useContext, useState } from "react";
import { Button, Form, Card } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const NewCostume = ({showForm1, setShowForm1}) => {
  const {user} = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  
  const submitHandler = async (e) => {
    // e.preventDefault();

    try {
      axios.post(`/api/users/${user.id}/costumes`, { title: title, image: image, user_id: user.id})
      
      setTitle('');
      setImage('');
      setShowForm1(!showForm1);
    } catch (error) {
      console.log(error)
    }
  };

  const handleFile = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
       <Card fluid style={{margin:"66px", padding: "66px"}}>
      <h1>Add yo Costume!</h1>

      <Form onSubmit={submitHandler}>
        <p>
          <div>Title:</div>
          <Form.Input value={title} onChange={e => setTitle(e.target.value)} />
        </p>

        <p>
          <div>Image:</div>
          <Form.Input value={image} onChange={e => setImage(e.target.value)} />
        </p>

        <Button>Get Spooky!</Button>
      </Form>
      </Card>
    </div>
  );
};

export default NewCostume;