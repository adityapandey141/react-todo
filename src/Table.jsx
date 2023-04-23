import React from "react";


export default (props)=>{

    const delitem = props.myfun;

return (

    <>
        <li> {props.value} 
        
            <button value={props.index} onClick={delitem}>x</button>
        </li>
    </>
)


}