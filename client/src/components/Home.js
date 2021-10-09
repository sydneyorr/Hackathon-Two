import React, { useContext, useState } from 'react';
import Housepage from '../pages/Housepage';
import MyCostume from '../pages/MyCostume';
import { AuthContext } from '../providers/AuthProvider';
import NewHouse from './House Components/NewHouse';

const Home = () => {
  const { user } = useContext(AuthContext)
  // const [myHouse, setMyHouse] = useState()
  // const [myCostume, setMyCostume] = useState()
  
  const renderSomething = () => {
    if (user.house){
      return (
        <div>
          <p>My House</p>
          <Housepage user = {user} 
          // house={myHouse}
          />
          <NewHouse user = {user}/>
        </div>
      )
    } 
    if (user.costume) {
      return (
        <div>
          <p>My Costume</p>
          <MyCostume 
          // costume={myCostume} 
          />
          </div>
      )
    }
    }
  return (
    <div>
      <h1>Home</h1>
      {renderSomething()}

    </div>
  );
};

export default Home;