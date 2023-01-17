import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserService from '../services/userService';

const UpdateUser = () => {
    const {userId} = useParams();
    const navigate = useNavigate()
    const [user,setUser] = useState({
      
        firstName:"",
        lastName:"",
        email:"" 
    })
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await UserService.getUserById(userId)
                setUser(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    },[])

    const handleChange = (e) =>{
        const value = e.target.value;
        setUser({...user, [e.target.name]:value})
      
    }
    
    const updateUser = (e) =>{
        e.preventDefault()
        console.log(user)
        UserService.udpateUser(user)
        .then((response) =>{
            navigate("/userList")
        })
        .catch(error =>{
            console.log(error)
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
                        onClick={()=> navigate("/userList")}>
                    Cancel
                    </button>
                <button className='bg-primary basis-[45%] py-2 px-3 text-base rounded-md'
                        onClick={updateUser}>
                    Update
                </button>
            </div>
        </div>
   </main>
  )
}

export default UpdateUser