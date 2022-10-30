
import React, {useEffect, useState} from 'react';
import '../App.css';
import TaskListContainer from './TaskListContainer';

function App() {

  const [taskData, setTaskData]=useState([])
  const [userData, setUserData]=useState([])

//-------get task data--------------
  useEffect(()=>{
    fetch("http://localhost:9292/tasks")
    .then(res=>res.json())
    .then(data=>setTaskData(data));
    console.log('taskData= ', taskData)
  },[])
//--------get user data--------------

useEffect(()=>{
  fetch("http://localhost:9292/users")
  .then(res=>res.json())
  .then(data=>setUserData(data));
  console.log('user data= ', userData)
},[])





  return (
    <div>
      <h1>Task Collaboration Platform</h1>
      <TaskListContainer taskData={taskData} userData={userData}/>
   </div>
  );
}

export default App;
