import React from "react";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import UserService from "../services/userService";
import User from "./User";

const Table = ()=>{
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

   
    useEffect(()=>{
         //fetch data from backend, and if done setLoading to false
    const fetchData = async () =>{
        setLoading(true);

        try{
            const response = await UserService.getUsers()
            setUser(response.data)
        }catch(error){
            console.log(error);
        }
        setLoading(false)
    }

        fetchData()
    },[])

    const deleteUser = (e,userId)=>{
        e.preventDefault();

        //delete from the backend 
        UserService.deleteUser(userId)
        .then((response) =>{

            //check user state if exist, then filter the state with the id
            // "!==" , means it will create a new copy without the passed parameter "userId"  
            if(user){
                setUser((prev) => {
                    return prev.filter(user => user.id !== userId)
                })
            }
        })
    }

    return(
        <main className=" flex justify-center p-3">
            
            <div className="mt-10  w-[60rem]">
                <div className="flex  items-end justify-between">
                    <div className="text-left space-y-4">
                        <p className="text-2xl font-semibold">Users</p>
                        <p>A list of user details.</p>
                    </div>        
                              
                    <button className="bg-primary text-white text-base py-2 px-3 rounded-md h-fit"
                            onClick={() => navigate("/addUser")}>
                        Add user
                    </button>
                </div>

                {/* Table */}
                <table className="table-fixed bg-white w-full rounded-xl my-10 table-border drop-shadow-lg">
                    <thead className="text-left text-lg	bg-[#f9fafb] border-b-2">
                        <tr className="">
                            <th className="p-4 rounded-tl-xl break-words">First name</th>
                            <th>Last name</th>
                            <th className="overflow-auto">Email</th>
                            <th className="rounded-tr-xl">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-left">
                        { !loading && (user.map( user => (                                 
                            <User user={user} deleteUser={deleteUser} key={user.id}/>
                          )))}
                 
                    </tbody>
                </table>    

                
            </div>
        </main>
    )

}

export default Table;