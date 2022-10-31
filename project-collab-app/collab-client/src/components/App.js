
import React, {useEffect, useState} from 'react';
import '../App.css';
import Project from './Project';

function App() {
  const [projectData, setProjectData]=useState([])
  const [taskData, setTaskData]=useState([])
  const [userData, setUserData]=useState([])

//---------get project data--------
useEffect(()=>{
  fetch("http://localhost:9292/projects")
  .then(res=>res.json())
  .then(data=>setProjectData(data));
  
},[])


//-------get task data--------------
  useEffect(()=>{
    fetch("http://localhost:9292/tasks")
    .then(res=>res.json())
    .then(data=>setTaskData(data));
    
  },[])
//--------get user data--------------

useEffect(()=>{
  fetch("http://localhost:9292/users")
  .then(res=>res.json())
  .then(data=>setUserData(data));
  
},[])



  return (
    <div>
      <h1>Task Collaboration Platform</h1>
      {
        projectData.map((project)=>{
          return(
            <Project project={project} userData={userData} taskData={taskData}/>
          )
        })
      }
   </div>
  );
}

export default App;
