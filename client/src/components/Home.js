import React, { useContext, useReducer } from 'react';
import Housepage from '../pages/Housepage';
import MyCostume from '../pages/MyCostume';
import { AuthContext } from '../providers/AuthProvider';
import NewHouse from './HouseComponents/NewHouse';

const Home = () => {
  const { user } = useContext(AuthContext)
  const [myHouse, setMyHouse] = useState(user.house)
  const [myCostume, setMyCostume]
  
  const renderSomething = () => {
    if (user.house){
      return (
        <div>
          <p>My House</p>
          <Housepage user = {user}/>
          <NewHouse user = {user}/>
        </div>
      )
    } 
    if (user.costume) {
      return (
        <div>
          <p>My Costume</p>
          <MyCostume />
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