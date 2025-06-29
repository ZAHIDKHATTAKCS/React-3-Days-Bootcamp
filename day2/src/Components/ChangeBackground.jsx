import React, { useState } from 'react'

const ChangeBackground = () => {
  const [BgColor, setBgColor] = useState('#4567ae');

  const getRandomColor = () => {
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    setBgColor(color);
  }
  return (
    <>
      <div style={{ backgroundColor: BgColor, height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <button style={{ borderRadius: '30px', border: 'none', padding: '20px', cursor:'pointer' }} onClick={()=>getRandomColor()}>Change Color</button>
      </div>
    </>
  )
}

export default ChangeBackground