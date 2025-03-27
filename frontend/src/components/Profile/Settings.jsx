import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [Value, setValue] = useState({address: ""});
  const [ProfileData, setProfileData] = useState();

  const headers = {
      id : localStorage.getItem("id"),
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
  const change = (e) => {
    const {name, value} = e.target;
    setValue({...Value, [name]: value});
  }
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/profile-info`, { headers });
      setProfileData(response.data);
      setValue({address: response.data.address});
    }
    fetch();
  },[]);
  const updateAddress = async () => {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/update-address`, Value, { headers });
    alert(response.data.message);
  }
  return (
    <>
      {!ProfileData && <div className="flex items-center justify-center w-full h-screen"><Loader />{" "}</div>}

      {ProfileData && (
        <div className='h-screen p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-500 mb-8'>Settings</h1>
          <div className='flex gap-12'>
            <div className=''>
              <label htmlFor="">Username</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.username}</p>
            </div>
            <div className=''>
              <label htmlFor="">Email</label>
              <p className='p-2 rounded bg-zinc-800 mt-2 font-semibold'>{ProfileData.email}</p>
            </div>
          </div>
          <div className='mt-4 flex flex-col'>
            <label htmlFor="">Address</label>
            <textarea 
              rows={5}
              name="address" 
              placeholder='Enter your address'
              className='p-2 rounded bg-zinc-800 mt-2 font-semibold'
              value={Value.address}
              onChange={change}
            />
          </div>
          <div className='mt-4 flex justify-end'>
             <button className='bg-yellow-500 text-white p-2 rounded mt-4 hover:bg-yellow-600 transition-all duration-300'
             onClick={updateAddress}>
               Update
             </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Settings