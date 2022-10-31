import React, {useEffect, useState} from 'react';

function Task({id, name, user_id, userData}){
    const [userId, setUserId] = useState([])
   
        
      useEffect(()=>{
        fetch(`http://localhost:9292/task_user/${id}`)
        .then(res=>res.json())
        .then(data=>setUserId(data));
        console.log(userId)
        
      },[])

    

    return(
        <div>
            {`id:${id} - name:${name}`}
            <select>
                <option selected>{userId.name}</option>
                        {userData.map((user)=>{
                            return(<option>{user.name}</option>)
                        })}
                    </select>
            <button>x</button>
        </div>
    )
} 

export default Task;