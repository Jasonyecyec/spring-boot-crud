import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import UserService from '../services/userService'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    email:"" 
})

const navigate = useNavigate();

const handleChange = (e) =>{
    const value = e.target.value;
    setUser({...user, [e.target.name]:value})
    console.log(user);
}

const clearField = ()=>{
     setUser({
        firstName:"",
        lastName:"",
        email:"" 
    })
}

const saveUser = (e) =>{
    e.preventDefault();
    UserService.saveUser(user).then(response =>{
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
    .finally(() =>{
        navigate("/userList");
    })
    
    
 
}

  return (
   <main className=' flex justify-center p-3 '>
        <div className='p-10 bg-white mt-10 w-96 space-y-7 drop-shadow-lg rounded-md'>
            <h1 className='text-2xl font-bold text-primary'>ADD NEW USER</h1>
            <div className='text-left space-y-3 '>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type="text" className='border text-base px-2 py-1 w-full'
                 name='firstName' 
                 value={user.firstName}
                 onChange = {(e) => handleChange(e)}/>
            </div>
 
            <div className='text-left space-y-3 '>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type="text" className='border text-base px-2 py-1 w-full'
                name='lastName'
                value={user.lastName}
                onChange = {(e) => handleChange(e)}/>
            </div>

            <div className='text-left space-y-3 '>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type="email" className='border text-base px-2 py-1 w-full'
                name='email'
                value={user.email}
                onChange = {(e) => handleChange(e)}/>
            </div>
            
            <div className='text-white flex justify-between '>
                <button className='bg-red-500 basis-[45%] py-2 px-3 rounded-md'
                        onClick={clearField}>
                    Clear
                    </button>
                <button className='bg-primary basis-[45%] py-2 px-3 text-base rounded-md'
                        onClick={saveUser}>
                    Save
                </button>
            </div>
        </div>
   </main>
  )
}

export default AddUser