import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {choosenList} from "../Store/ListSlice";
import "./Header.css";
function Header() {
  const [selectedList,setsSelectedList]=useState("");
  const dispatch=useDispatch();
  dispatch(choosenList(selectedList));
  return (
      <div className='header'>
    <h1 className='header-title'>List App</h1>
    <select name="list" onChange={(e)=>{setsSelectedList(e.target.value)}}>
    <option  value ="" selected disabled hidden>Please Select List</option>
        <option value="lista"> Show List A </option>
        <option value="listb"> Show List B </option>
        <option value="uniab"> Show Unique A & B </option>
        <option value="combab"> Show All </option>
    </select>
    </div>
  )
}

export default Header