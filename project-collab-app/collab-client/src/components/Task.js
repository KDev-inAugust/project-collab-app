import React, {useEffect, useState} from 'react';

function Task({id, name, userData, handleChangeUser, deleteATask}){
    const [userId, setUserId] = useState([])
    const [showEditFields, setshowEditFields] = useState(false)
    const [taskName, setTaskName] = useState(name)
   
    //---get the user based on a task id as per a custom instance method
      useEffect(()=>{
        fetch(`http://localhost:9292/task_user/${id}`)
        .then(res=>res.json())
        .then(data=>setUserId(data.name));
      },[])
    
    //--onChange Function Calls changeUser Prop Function from App-------
    function handleUserNameOnChange(e){
        fetch(`http://localhost:9292/users_by_name/${e.target.value}`)
        .then(res=>res.json())
        .then(data=>{handleChangeUser(id, data.id);
        setUserId(data.name)}
        );
    }

    //----------this function allows the edit fields for a task to be shown------

    
    function showHideEditTask(){
        if (showEditFields===false){
             setshowEditFields(true)
        } 
        else if (showEditFields===true){
            setshowEditFields(false);
            fetch(`http://localhost:9292/task_name_change/${id}`,{
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                 name: taskName
                 }),})
            .then(res=>res.json())
            .then(data=>setTaskName(data.name));
        console.log("Task Name Updated=>", taskName)}
        }
    

    //---------this function is called when the task name input is changed-------
    function handleTaskNameOnChange (e){
        setTaskName(e.target.value)
    }

    function handleDeleteClick(){
        if (window.confirm('are you sure you want to delete this task?')===true){
        deleteATask(id)
    }
        }

    return(
        <div>
            {`id:${id} - name: ${taskName} - `}
            {userId}
            {showEditFields===false? <button onClick={showHideEditTask}>edit task</button>
            : 
                <div>
                    <select onChange={handleUserNameOnChange}>
                    <option>{userId}</option>
                            {userData.map((user)=>{
                                if(user.name !=userId){
                                    return(<option>{user.name}</option>)
                                }
                            })}
                        </select>
                        <br></br>
                        <input onChange={handleTaskNameOnChange} placeholder='change task name here'></input>
                        <br></br>
                        <button onClick={handleDeleteClick}>delete task</button>
                        <br></br>
                        <button onClick={showHideEditTask}>close edit fields</button>
                </div>}
        </div>
    )
} 

export default Task;