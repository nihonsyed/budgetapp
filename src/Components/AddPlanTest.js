import React from "react";
import { useState } from "react";

function AddPlanTest({plans,setPlans,setPdetails,pdetailsShow,setPdetailsShow})
{  
    const [st,setSt]=useState(false);
    const [planid,setPlanid]=useState(0);
    const[bname,setBname]=useState('');
    const[bfrom,setBfrom]=useState('');
    const[bto,setBto]=useState('');
    const[budget,setBudget]=useState(0);
    const[search,setSearch]=useState('');
    const tableRef=React.createRef(null);    
    

    const newAddItem=()=>{

        if(st===false)
          {setSt(true);}
  
    }
    const removeAddPlans=()=>{
        setSt(false);
    }

  const filterPlans=(e)=>{
        
        setSearch(e.target.value);
        
    }

    const removePlans=(planId)=>{
   
      setPlans(
       plans.filter((plan)=>{
        return plan.id!==planId;
       })
      );
    }

    const checkId=(elem,idd)=>{
      return elem.id===idd;
    }
    
    return(
        <>
        <div className="div-details" >

         {
             (st===false)?<button className="budget-edit"  onClick={newAddItem}><i className="fa fa-plus add-icon" aria-hidden="true"></i> Budget</button>:<></>
         }
         
        {
           
        
           (st===true)?(<div className="add-expense">
           <div>
          <label >Name</label><br/>
          <input type="text" className="Name" name="Name" placeholder="Name" max="20" onChange={(e)=>{setBname(e.target.value)}}/><br/>
          <label >Budget</label><br/>
          <input type="number" className="Cost" name="Budget" placeholder="Estimated Budget" onChange={(e)=>{setBudget(e.target.value)}}/>
        
          <label >Cost</label><br/>
          <input type="datetime-local" className="From" name="From" placeholder="Start At" onChange={(e)=>{setBfrom(e.target.value)}}/>
        
          <label >Cost</label><br/>
          <input type="datetime-local" className="To" name="To" placeholder="End"  onChange={(e)=>{setBto(e.target.value)}}/>
          <i className="fa fa-times-circle" aria-hidden="true" onClick={removeAddPlans}></i>
          </div>
          <button  onClick={()=>{ setPlanid(planid+1);  setPlans([...plans,{id:planid,name:bname,span:`${bfrom} to ${bto}`,planBudget:Number(budget),expense:0,expenses:[]}]);}} >Add New Budget</button>
         </div>):<></>
        }
      </div>

<div className="div-details" >
{(plans.length>0)?<><h3>Current Plans</h3><input className="search-expenses" type="text" placeholder="Type to search..." onChange={filterPlans}/></>:<h3>No Current Plan</h3>}

<table className="expense-table" ref={tableRef}>
  {
    plans.filter((plan)=>{return plan.name.toUpperCase().includes(search.toUpperCase())}).map((data,index)=>{
      return (<thead key={data.id.toString()}>
      <tr key={data.id.toString()}>
      <td>{data.name}</td>
      <td ><span>{data.span}</span></td>
      <td><button className="budget-edit" onClick={()=>{const planToBeShown=plans.find((elem)=>{return checkId(elem,data.id)});  setPdetails({id:planToBeShown.id,name:planToBeShown.name,budget:planToBeShown.planBudget,expenses:planToBeShown.expenses,expense:planToBeShown.expense}); 
    
      
          setPdetailsShow(!pdetailsShow);
         
    
    }}>{(pdetailsShow===false)?"View Details":"View Less"}</button></td>
      <td className="tdata-2-3">
        
        {
           (pdetailsShow===false)?<span><i className="fa fa-trash" aria-hidden="true" onClick={()=>{removePlans(data.id);}}  ></i></span>:<></>
        }
        </td> 
    </tr>
    </thead>)
    })
  }
 </table>
</div>
</>
    );
}
export default AddPlanTest;