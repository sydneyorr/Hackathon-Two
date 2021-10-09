import React, { useContext, useState } from 'react';
import { Button } from 'semantic-ui-react';
import Housepage from '../pages/Housepage';
import MyCostume from '../pages/MyCostume';
import { AuthContext } from '../providers/AuthProvider';
import NewHouse from './House Components/NewHouse';

const Home = () => {
  const { user } = useContext(AuthContext)
  // const [myHouse, setMyHouse] = useState()
  // const [myCostume, setMyCostume] = useState()
  const [showForm, setShowForm] = useState(false)
  
  const renderSomething = () => {
    if (user.house && user.costume){
      return (
        <div>
          <div>
            <h3>My House</h3>
            <Housepage user = {user} 
            // house={myHouse}
            />
          </div>
          <div>
            <h3>My Costume</h3>
            <MyCostume 
            // costume={myCostume} 
            />
          </div>
        </div>
      )
    } 
    if (user.costume) {
      return (
        <div>
          <h3>My Costume</h3>
          <MyCostume 
          // costume={myCostume} 
          />
          </div>
      )
    }
    if (user.house) {
      return (
        <div>
          <h3>My House</h3>
          <Housepage user = {user} 
          // house={myHouse}
          />
        </div>
      )
    }
  }

  
  return (
    <div>
      <h1>Home</h1>
      {renderSomething()}
      <Button onClick={()=> setShowForm(!showForm)}>Add House</Button>
      {showForm && <NewHouse user = {user}/>}
    </div>
  );
};

export default Home;