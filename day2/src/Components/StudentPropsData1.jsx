import React from 'react'

const StudentPropsData1 = (props) => {
  let StudentName = 'Peter Parker';
  let Designation = 'Spider man';
  let Colors = "red and blue";
  return (
    <>
    <h1>{StudentName}</h1>
    <p>This person work as a {Designation}</p>
    <p>The color of his clothes are {Colors}</p>
    <p>The person study at the university <strong><i>{props.University}</i></strong></p>
    <p>He is very close to  <strong><i>{props.BestFriend}</i></strong></p>
    <p>The year of the movie released {props.YearOfMoive}</p>
    </>
  )
}

export default StudentPropsData1