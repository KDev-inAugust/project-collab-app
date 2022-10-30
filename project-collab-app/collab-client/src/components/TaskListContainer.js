import Task from "./Task";

function TaskListContainer({taskData, userData}){
    console.log("task list container", userData[2])
    return(
        <div>
            {taskData.map((index)=>{
                if(index.completedYN===false){
                return(
                    <div>
                    <Task id={index.id} name={index.name}/>
                    <select>
                        {userData.map((user)=>{
                            return(<option>{user.name}</option>)
                        })}
                    </select>
                    </div>
                )
                }
            })
            }
        </div>
    )
} 

export default TaskListContainer;

