import React from "react";
import { useState } from "react";
import MainDetailsBox from "./MainDetailsBox";
import TableComponent from "./TableComponent";
import AddExpenses from "./AddExpenses";
function PlanDetails({pdetails,setPdetails,pdetailsShow,plans,setPlans})
{
    const[searchedExp,setSearchedExp]=useState("");
    if(pdetailsShow===false)
      {
        return <></>;
      }
     else{ 
    return(

       <div className="div-details">
        <h1>{pdetails.name}</h1>
        <div className="main-details">
        <MainDetailsBox color="#f0f2f5" first={true} title="Budget" amount={`${pdetails.budget}`} />
        <MainDetailsBox color="#f0f2f5" first={false}   title="Remaining" amount={`${pdetails.budget-pdetails.expense}`} />
        <MainDetailsBox color="#f0f2f5" first={false}  title="Spent so far" amount={`${pdetails.expense}`}/>
        </div>
        <h2>Expenses</h2>
        <input className="search-expenses" type="text" placeholder="Type to search..." onChange={(e)=>{setSearchedExp(e.target.value)}}/>
        <TableComponent expenseList={pdetails.expenses} setPdetails={setPdetails}  pdetails={pdetails} searchedExp={searchedExp} />
        <AddExpenses  setPdetails={setPdetails}  pdetails={pdetails} plans={plans} setPlans={setPlans}/>
       </div>

     
    );}
}
export default PlanDetails;