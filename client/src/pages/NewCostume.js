import axios from "axios";
import { useState } from "react";

const CostumeForm = (props) => {
  const {costume} = props;

  const [title, setTitle] = useState('');
  const [ima, setIma] = useState('');
  
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.post(`/api/user/costume`, { title: title, image: image })
      
      setTitle('');
      setIma('');
    } catch (error) {
      console.log(error)
    }
  };

  const handleFile = (e) => {
    console.log(e.target.files);
  };

  return (
    <div>
      <h1>Add yo Costume!</h1>

      <form onSubmit={submitHandler}>
        <p>
          <div>Title:</div>
          <input value={title} onChange={e => setTitle(e.target.value)} />
        </p>

        <p>
          <div>Image:</div>
          <input type="file" onChange={handleFile}/>
        </p>

        <button>Get Spooky!</button>
      </form>
    </div>
  );
};

export default NewCostume;