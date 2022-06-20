import React from 'react'
import { useSelector } from 'react-redux';
import "./List.css";
function List() {
    // finallist
    const lists=useSelector((state)=>state.list.finallist);
     
    if(lists.length===0){
        return <p className='noListTitle'> No List to Show</p>
    }
  return (
      <div className="list-container">
          {
              lists.map((li)=>{
                  console.log(li);
                 return <h3 className='list-item'>{li}</h3>

              })
          }
      </div>
        
  )
}

export default List