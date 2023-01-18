

import './App.css';
import React from 'react';
//import AddPlans from './Components/AddPlans';
import AddPlanTest from './Components/AddPlanTest';
import PlanDetails from './Components/Plandetails';
import { useState } from 'react';


function App() {

  const currentPlanRef=React.createRef(null);
  const[plans,setPlans]=useState([]);
  const[pdetails,setPdetails]=useState({name:'',budget:0,expenses:[],expense:0});
  const[pdetailsShow,setPdetailsShow]=useState(false);
 
  return (
    <div className="container">
      {/* <AddPlans curPlanRef={currentPlanRef} plans={plans} setPlans={setPlans}/> */}
      <AddPlanTest curPlanRef={currentPlanRef} plans={plans} setPlans={setPlans}  setPdetails={setPdetails} pdetailsShow={pdetailsShow} setPdetailsShow={setPdetailsShow}/>
      <PlanDetails pdetails={pdetails}  setPdetails={setPdetails}  pdetailsShow={pdetailsShow} plans={plans} setPlans={setPlans}/>
      {/* <CurrentPlans  reference={currentPlanRef}  plans={plans} /> */}
    </div>
    
  );
}

export default App;
