import React from "react";
import { useState } from "react";

 function AddedItem({setStprops,plans,setPlans})
{

     let [bname,bfrom,bto]=[undefined,undefined,undefined];      

      function removeAddPlans()
      {
         setStprops(false);
      }

      function addPlan()
      {
    //    const bformArr=bfrom.split('T');
    //    const bToArr=bto.split('T');

    //    const planTable=document.getElementsByClassName("expense-table")[1];
    //    const thead=document.createElement("thead");
    //    thead.innerHTML=`<tr>
    //    <td>${bname}</td>
    //    <td ><span>${bformArr[0]} to ${bToArr[0]}</span></td>
    //    <td><button class="budget-edit">View Details</button></td>
    //    <td class="tdata-2-3"><span><i class="fa fa-trash" aria-hidden="true" onclick="deleteTr()"></i></span></td> 
    //  </tr>`;
    //    planTable.appendChild(thead);
       plans.push({name:bname,span:`${bfrom} to ${bto}`});
       console.log(plans);
       setPlans(plans);
      
      }

    return(
        
       <div className="add-expense">
        <div>
       <label >Name</label><br/>
       <input type="text" className="Name" name="Name" placeholder="Name" max="20" onChange={(e)=>{bname=e.target.value}}/><br/>
       <label >Budget</label><br/>
       <input type="number" className="Cost" name="Budget" placeholder="Estimated Budget"/>
     
       <label >Cost</label><br/>
       <input type="datetime-local" className="From" name="From" placeholder="Start At" onChange={(e)=>{bfrom=e.target.value}}/>
     
       <label >Cost</label><br/>
       <input type="datetime-local" className="To" name="To" placeholder="End"  onChange={(e)=>{bto=e.target.value}}/>
       <i className="fa fa-times-circle" aria-hidden="true" onClick={removeAddPlans}></i>
       </div>
       <button  onClick={addPlan} >Add New Budget</button>
      </div>
    
       
    );  
}


function AddPlans({plans,setPlans})
{  
    
    
    const divDetails1=React.createRef(null);
    const [st,setSt]=useState(false);
    

    const newAddItem=()=>{

        if(st===false)
          {setSt(true);}
  
    }
   
    return(
        <>
        <div className="div-details" ref={divDetails1}>

         {
             (st===false)?<button className="budget-edit"  onClick={newAddItem}><i className="fa fa-plus add-icon" aria-hidden="true"></i> Budget</button>:<></>
         }
         
        {
           
        
            (st===true)?<AddedItem   setStprops={setSt} plans={plans} setPlans={setPlans}/>:<></>
        }
      </div>

<div className="div-details" >
<h3>Current Plans</h3>
<input className="search-expenses" type="text" placeholder="Type to search..."/>
<table className="expense-table">
  {
    plans.map((data,index)=>{
      //console.log(props.plans);
      return (<thead key={index}>
      <tr key={index}>
      <td>{data.name}</td>
      <td ><span>{data.span}</span></td>
      <td><button className="budget-edit">View Details</button></td>
      <td className="tdata-2-3"><span><i className="fa fa-trash" aria-hidden="true"></i></span></td> 
    </tr>
    </thead>)
    })
  }
 </table>
</div>
</>
    );
}
export default AddPlans;