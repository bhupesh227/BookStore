import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import { Outlet } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import axios from 'axios';
import Loader from '../components/Loader/Loader';
import MobileNav from '../components/Profile/MobileNav';
const Profile = () => {
 // const isLoggedIn = useSelector();
  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  useEffect(() => {
    const fetch = async ()=>{
      const response = await axios.get("http://localhost:3000/api/v1/profile-info",{headers});
      setProfile(response.data);
    }
    fetch();
  }, );
  
  return (
    <div className='bg-zinc-900 min-h-screen px-6 lg:px-12 flex flex-col lg:flex-row py-8 gap-4 text-white'>
       {!Profile && (
          <div className="flex items-center justify-center w-full h-screen"><Loader />{" "}</div>
       )}
       {Profile && (
          <>
           <div className='lg:w-1/6 w-full'>
             <Sidebar data={Profile}/>
             <MobileNav/>
           </div>
           <div className='w-full lg:w-5/6'>
             <Outlet/>
           </div>
         </>
       )}
    </div>
  )
}

export default Profile