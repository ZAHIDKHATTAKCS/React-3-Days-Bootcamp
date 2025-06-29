import React from 'react'

const StateManagement = () => {

    // array definition
    let BestSitcomes = ['The bag bang theory', 'friends', 'modern family'];



  return (
    <>
    
    {/* Traverse the data */}
    {BestSitcomes.map(names=>{
        return (
            <>
            <li>{names}</li>
            </>
        ) 
    })}
    </>
  )
}

export default StateManagement