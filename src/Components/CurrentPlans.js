import React from "react";





function CurrentPlans(props)
{
  
  return (<div className="div-details" ref={props.reference}>
    <h3>Current Plans</h3>
   <input className="search-expenses" type="text" placeholder="Type to search..."/>
    <table className="expense-table">
      {
        props.plans.map((data,index)=>{
          console.log(props.plans);
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

  );
}

export default CurrentPlans;