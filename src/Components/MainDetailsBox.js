import React from "react";
function MainDetailsBox(props)
{   
    return(

        <div style={{width:'18vw',height:'2vw',padding:'1vw 1vw 1vw 1vw',backgroundColor:props.color,marginLeft:'1.5vw',marginRight:'1.5vw'}}>
        <span style={{position:'relative',fontWeight:'bold',top:'calc((100% - 16px) / 2)'}} >{props.title}: {props.amount}</span>
        
        {(props.first===true)?<button className="budget-edit" style={{float:'right'}}>Edit</button>:<></>}
         
        </div>
     
    );
}
export default MainDetailsBox;