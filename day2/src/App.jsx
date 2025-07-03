import React from 'react'
// import StudentPropsData1 from './components/StudentPropsData1'
// import StudentPropsData2 from './components/StudentPropsData2'
// import StateManagement from './Components/StateManagement';
// import StateManagment2 from './Components/StateManagment2';
import ChangeBackground from './Components/ChangeBackground';
import './App.css';
import ThemeChangingTask from './Components/ThemeChangingTask';

const App = () => {
  let University = "marvel";
  return (
    <>
    {/* <div>
      
      <StudentPropsData1 University={University} BestFriend="Tony Stark" YearOfMoive={2019}/>
      <hr />
      <StudentPropsData2 University={University}/>
    </div>

    <StateManagement  />

    <StateManagment2 /> */}

    {/* <ChangeBackground /> */}

    <ThemeChangingTask />
    </>
  )
}

export default App