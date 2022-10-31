 
import React, {useEffect, useState} from 'react';
import Task from './Task';



function Project({project, taskData, userData}){

    const [associatedTaskData, setAssociatedTaskData]=useState([])
    
    
    useEffect(()=>{
        fetch(`http://localhost:9292/project_tasks/${project.id}`)
        .then(res=>res.json())
        .then(data=>setAssociatedTaskData(data));
        
      },[])

      
      

    return (
        <div>
            <h3>{`${project.name}`}</h3>
            {associatedTaskData.map(task=>{
                return(
                    <div>
                    <Task id={task.id} name={task.name} user_id={task.user_id} userData={userData}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Project;