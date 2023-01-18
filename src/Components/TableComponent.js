import React from "react";
function TableComponent({expenseList,setPdetails, pdetails,searchedExp})
{   
    const removeCost=(idd,amount)=>{
      

      const updatedExp= expenseList.filter((expense)=>{
        return expense.id!==idd;
     });
      setPdetails({...pdetails,expenses:updatedExp,expense:pdetails.expense-amount});
     
    }
    return(
      
    
        <table className="expense-table">
        {
           expenseList.filter((exp)=>{return exp.ename.toUpperCase().includes(searchedExp.toUpperCase())}).map((exp)=>{
           
            return( <thead key={exp.id.toString()}>
            <tr key={exp.id.toString()}>
              <td>{exp.ename}</td>
              <td className="tdata-2-3"><span>${exp.amount}</span></td>
              <td className="tdata-2-3"><span><i className="fa fa-trash" aria-hidden="true" onClick={()=>{removeCost(exp.id,exp.amount)}}></i></span></td>
            </tr>
            </thead>)
    
          })
        }
       </table>

     
    );
}
export default TableComponent;