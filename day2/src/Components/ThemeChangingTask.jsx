import React, { useState } from 'react'

const ThemeChangingTask = () => {
    const [themeColor, setThemeColor] = useState('#ffffff');

    const [textColor, setTextColor] = useState('#000000');

    const ChangeThemeColor = () =>{
        if (themeColor === '#ffffff') {
            setThemeColor('#000000');
            setTextColor('#ffffff');
        } else {
            setThemeColor('#ffffff');
            setTextColor('#000000');
        }
    }
  return (
    <div style={{backgroundColor:themeColor,color:textColor,fontSize:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eligendi ipsa reiciendis, delectus voluptatibus animi nulla fuga velit, aut debitis tenetur neque error sunt eaque ratione. Nostrum, qui? Laborum, accusantium.

        <button style={{padding:'10px',backgroundColor:'lightblue',color:'red',border:'none',borderRadius:'20px',fontSize:'20px', cursor:'pointer'}} onClick={()=>ChangeThemeColor()}>Change Theme</button>
    </div>
  )
}

export default ThemeChangingTask