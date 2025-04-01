import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [Values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    address: '',
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };

  const submit = async () => {
    try {
      if (Values.username === '' || Values.email === '' || Values.password === '' || Values.address === '') {
        alert('Please fill all the fields');
        return;
      }else{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/sign-up`, Values);
        alert(response.data.message)
        navigate('/Login');
      }
          
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message || 'Something went wrong!');
      } else {
        alert('An unexpected error occurred.');
      }
    }
  }

  return (
    <div className='h-screen bg-zinc-900 px-9 lg:px-12 py-8 lg:pr-0 lg:pt-0 flex items-center justify-center flex-grow gap-20'>
      <div className='bg-zinc-800 p-4 lg:p-6 rounded-lg py-5 w-full md:w-3/6 lg:w-2/6 mb-20 lg:mb-10'>
        <p className='text-zinc-200 text-xl font-semibold flex items-center justify-center'>Sign Up</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className='text-zinc-400'>Username:</label>
            <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Username' 
                    name='username' required value={Values.username} onChange={change}/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Email:</label>
            <input type="email" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Email'
                    name='email' required value={Values.email} onChange={change}/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Password:</label>
            <input type="password" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Password'
                    name='password' required value={Values.password} onChange={change}/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Address:</label>
            <textarea className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' rows='5' placeholder='Address'
                    name='address' required value={Values.address} onChange={change}/>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-zinc-100 font-semibold py-2 rounded hover:bg-blue-400 transition-all duration-300' 
              onClick={submit}>
                Sign Up
            </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
            Already have an Account ? &nbsp;
            <Link to='/Login' className='text-blue-500 hover:text-blue-400 transition-all duration-300'>
                <u>Log In</u>
            </Link>    
          </p>
        </div>
      </div>

      <div className='w-3/6 h-[90vh] flex justify-center items-center lg:block mb-10'>
        <div className="w-full h-full relative">
          <img
            className='absolute inset-0 w-full h-full object-cover rounded-2xl drop-shadow-xl mix-blend-lighten grayscale-10'
            src="./SignUPP.png"
            alt="Signup photo"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp