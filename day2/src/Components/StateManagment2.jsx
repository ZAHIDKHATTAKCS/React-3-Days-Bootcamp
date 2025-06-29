import React from 'react'
import { useState } from 'react'

const StateManagment2 = () => {
    const [Count, setCount]= useState(0);
  return (
    <>
    <p>The post likes are <strong>{Count}</strong></p>
    <button onClick={()=>{
        setCount(Count+1);
    }} style={{cursor:'pointer',backgroundColor:'black',border:'none',padding:'10px 20px',borderRadius:'10px'}}>👍</button>
    </>
  )
}

export default StateManagment2