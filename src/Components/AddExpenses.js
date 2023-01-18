import React from "react";
import { useState } from "react";
function AddExpenses({ setPdetails,pdetails,plans,setPlans})
{   

   const[costName,setCostName]=useState("");
   const[costAmount,setCostAmount]=useState(0);
   const[costId,setCostId]=useState(0);
 



    return(

      
    <>
    <h2>Add Expense</h2>
    <div className="add-expense">
    <div>
    <label >Name</label><br/>
    <input type="text" className="Name" name="Name" placeholder="Name" max="20" onChange={(e)=>{setCostName(e.target.value)}}/><br/>
    <label >Cost</label><br/>
    <input type="number" className="Cost" name="Cost" placeholder="Cost" onChange={(e)=>{setCostAmount(Number(e.target.value))}}/>

    <label >Cost</label><br/>
    <input type="datetime-local" className="From" name="From" placeholder="Start At" />

    <label >Cost</label><br/>
    <input type="datetime-local" className="To" name="To" placeholder="End" />

   </div>
    <button onClick={()=>{setCostId(costId+1);setPdetails({...pdetails,expense:pdetails.expense+costAmount,expenses:[...pdetails.expenses,{id:costId,ename:costName,amount:costAmount}]});
    
    const tempArr=[...plans];
    console.log(pdetails.id);
    tempArr.map(function(elem){
      if(elem.id===pdetails.id) 
         {
          elem.expense+=Number(costAmount);
          elem.expenses.push({id:costId,ename:costName,amount:costAmount});
         }
    });
    setPlans(tempArr);
    console.log(plans);
  }}>Add</button>
  </div>
  </>
 
     
    );
}
export default AddExpenses;