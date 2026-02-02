import React, {useEffect,useState} from 'react'

function UserData() {
    const[user,setUser]=useState([])
    useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((Response)=>Response.json())
            .then((data)=>setUser(data))
    },[])
  return (
    <div >
        <h1 className='title'>USER DETAIL CONTENTS</h1>
        <div className='usercontent'>
            {user.map((Details)=>(
               <div key={user.id} >
                    <p>name:{Details.name}</p>
                    <p>user email:{Details.email}</p>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default UserData