import React, { useState } from 'react'
import "./input.css";
import {addInList} from "../Store/ListSlice";
import { useDispatch } from 'react-redux';
import List from './List';
function Input() {
  const [newList,setnewList]=useState([]);
  const [selectedList,setSelectedList]=useState("");
  const dispatch=useDispatch();

  const addList=()=>{
   if(!newList || !selectedList){
     alert("Please Fill");
   }
  
   dispatch(addInList({list:newList,type:selectedList}))
   
  }
  return (
    <div className="center-container">
      <h2 className="input-header">Add Lists</h2>
    <input type="text" placeholder='Add New List' onChange={(e)=>{setnewList(e.target.value)}}></input>
    <select name="addlist" className='selectList' onChange={(e)=>{setSelectedList(e.target.value)}}>
        <option  value ="" selected disabled hidden>Please Select List</option>
         <option value="lista" > Add in List A </option>
        <option value="listb"> Add in List B </option> 
    </select>
    <button className='addBtn' onClick={()=>{addList()}}>Add new List </button>
    <List></List>
    </div>
    
  )
}

export default Input