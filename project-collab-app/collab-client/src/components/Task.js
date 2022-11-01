import React, {useEffect, useState} from 'react';

function Task({id, name, userData, handleChangeUser}){
    const [userId, setUserId] = useState([])
   
    //---get the user based on a task id as per a custom instance method
      useEffect(()=>{
        fetch(`http://localhost:9292/task_user/${id}`)
        .then(res=>res.json())
        .then(data=>setUserId(data));
        console.log(userId)
      },[])
    //--onChange Function Calls Change User Prop Function from App-------

    function handleOnChange(e){

        fetch(`http://localhost:9292/users_by_name/${e.target.value}`)
        .then(res=>res.json())
        .then(data=>handleChangeUser(id, data.id));
        
    }

    return(
        <div>
            {`id:${id} - name:${name}`}
            <select onChange={handleOnChange}>
                <option>{userId.name}</option>
                        {userData.map((user)=>{
                            if(user.name !=userId.name){
                                return(<option>{user.name}</option>)
                            }
                        })}
                    </select>
            <button>x</button>
        </div>
    )
} 

export default Task;