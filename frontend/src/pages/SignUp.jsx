import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='h-screen bg-zinc-900 px-9 lg:px-12 py-8 lg:pr-0 lg:pt-0 flex items-center justify-center flex-grow gap-20'>
      <div className='bg-zinc-800 p-4 lg:p-6 rounded-lg py-5 w-full md:w-3/6 lg:w-2/6 mb-20 lg:mb-10'>
        <p className='text-zinc-200 text-xl font-semibold flex items-center justify-center'>Sign Up</p>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className='text-zinc-400'>Username:</label>
            <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Username' 
                    name='username' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Email:</label>
            <input type="email" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Email'
                    name='email' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Password:</label>
            <input type="password" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Password'
                    name='password' required/>
          </div>
          <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Address:</label>
            <textarea className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' rows='5' placeholder='Address'
                    name='address' required/>
          </div>
          <div className='mt-4'>
            <button className='w-full bg-blue-500 text-zinc-100 font-semibold py-2 rounded hover:bg-blue-400 transition-all duration-300'>
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

      <div className='w-3/6 h-[80vh] flex justify-center items-center hidden lg:block mb-10'>
        <div className="w-full h-full relative">
          <img
            className='absolute inset-0 w-full h-full object-cover rounded-2xl drop-shadow-xl mix-blend-lighten grayscale-50'
            src="./signup.png"
            alt="Login"
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp