import React from 'react'
import { useNavigate } from 'react-router-dom';


const User = ({user,deleteUser}) => {
   const navigate = useNavigate();
    const editUser = (e,userId)=>{
        e.preventDefault();
        navigate(`/updateUser/${userId}`)

   }


  return (
    <tr className="border-b-[1.5px]" key={user.id}>
    <td className="p-4">{user.firstName}</td>
        <td>{user.lastName}</td>
        <td className="break-words">{user.email}</td>
        <td className="flex items-center h-[100%] p-3.5">
            <button onClick={(e,userId)=> editUser(e,user.id)}>    
                <img src={require("../assets/edit-btn.png")} alt="edit" className="w-9 md:w-8"/>
            </button>
            <button className="ml-5"
                    onClick={(e,id)=> {
                        if(window.confirm(`Are you ure you want to delete ${user.firstName} ${user.lastName}`)){
                            deleteUser(e,user.id)
                        }                         
                    }}>
                <img src={require("../assets/delete-btn.png")} alt="delete" className="w-9 md:w-8" />
            </button>
           
        </td>
    </tr>
  )
}

export default User