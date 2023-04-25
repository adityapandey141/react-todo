import React from "react";

import Swal from 'sweetalert2'

import { useState } from "react";


export default (props)=>{

    const delitem = props.myfun;
    //const edit = props.editfun;
    const myfun = props.editfun;
    const [newdata,setNewdata]=useState(props.value);

    
   const al =()=> Swal.fire({
   
    text: 'Start changing data and hit enter button',
    input: 'text',
    inputValue: newdata,
    allowEnterKey:true,
    showConfirmButton:false,
    preConfirm:(login) => {myfun(login,props.index)}
    
    });
    const getdata =(e)=>{
        e.preventDefault();

        return closeModal();
     
    }
return (

    <>
        <li> {props.value} 
        
            <button value={props.index} onClick={delitem}>x</button>
            <button value={props.index} onClick={al}>edit </button> 
           
        </li>
    </>
)


}