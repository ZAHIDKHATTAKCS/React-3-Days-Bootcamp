import React from 'react'

// receive data as a destructuring
const StudentPropsData2 = ({University}) => {
  let StudentName = 'Thor Odinson';
  let Designation = 'God of Thunder';
  let Colors = "red and gold";
  return (
    <>
    <h1>Student 2 Data</h1>
    <h2>{StudentName}</h2>
    <p>This person work as a {Designation}</p>
    <p>The color of his clothes are {Colors}</p>
    <p>The person study at the university <strong><i>{University}</i></strong></p>

    </>
  )
}

export default StudentPropsData2