import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { AuthContext } from '../../providers/AuthProvider';

const NewHouse = () => {
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [street, setStreet] = useState("")
  const [image, setImage] = useState("")
  const [zip, setZip] = useState("")
  const {user, setHouse } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    // e.preventDefault()
    try {
      let res = await axios.post("/api/houses", {city, state, street, image, zip, user_id: user.id})
      setHouse()
      console.log("working")
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
   <Form onSubmit={()=>handleSubmit()}>
    <Form.Field>
      <label>City</label>
      <input placeholder='City' onChange={(e)=>setCity(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>State</label>
      <input placeholder='State' onChange={(e)=>setState(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Street</label>
      <input placeholder='Street' onChange={(e)=>setStreet(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Zip</label>
      <input placeholder='Zip' onChange={(e)=>setZip(e.target.value)}/>
    </Form.Field>
    <Form.Field>
      <label>Image</label>
      <input placeholder='Image' onChange={(e)=>setImage(e.target.value)}/>
    </Form.Field>

    <Button type='submit'>Submit</Button>
  </Form>
    </div>
  );
};

export default NewHouse;