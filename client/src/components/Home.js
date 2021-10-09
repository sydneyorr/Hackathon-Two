import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import NewHouse from './House Components/NewHouse';

const Home = () => {
  const { user } = useContext(AuthContext)
  
  const renderSomething = () => {
    if (user.house){
      return (
        <div>
          <p>House page</p>
          <NewHouse user = {user}/>
        </div>
      )
    } 
    if (user.costume) {
      return (
          <p>My Costume</p>
      )
    }
    }
  return (
    <div>
      <h1>Home</h1>

    </div>
  );
};

export default Home;