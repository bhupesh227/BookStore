import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {authActions} from "../store/auth.js";
import {useDispatch} from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [Values, setValues] = useState({
    username: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({
      ...Values,
      [name]: value,
    });
  };

  const submit = async () => {
    try {
      if (Values.username === '' || Values.password === '' ) {
        alert('Please fill all the fields');
        return;
      }else{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/login`, Values);

        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id",response.data.id);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("role",response.data.role);
        navigate("/profile")
    
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
      <div className='bg-zinc-800 p-4 lg:p-8 rounded-lg py-5 w-full md:w-3/6 lg:w-2/6 lg:h-[55vh] h-[50vh]'>
        <h3 className='text-zinc-200 text-xl font-semibold flex items-center justify-center'>Log In</h3>
        <div className='mt-4'>
          <div>
            <label htmlFor="" className='text-zinc-400'>Username</label>
            <input type="text" className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Username' 
                    name='username' required value={Values.username} onChange={change}/>
          </div>

          <div className='mt-4 relative'>
            <label htmlFor="" className='text-zinc-400'>Password</label>
            <input type={showPassword ? "text" : "password"} className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none' placeholder='Password'
                    name='password' required value={Values.password} onChange={change}/>
            
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 bottom-3 text-zinc-400 hover:text-zinc-200"
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </button>
          </div>

          <div className='mt-4'>
            <button className='w-full mt-5 lg:mt-2 bg-blue-500 text-zinc-100 font-semibold py-2 rounded hover:bg-blue-400 transition-all duration-300'
              onClick={submit}>
                Log In
            </button>
          </div>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>Or</p>
          <p className='flex mt-4 items-center justify-center text-zinc-200 font-semibold'>
            Already have an Account?&nbsp;
            <Link to='/SignUp' className='text-blue-500 hover:text-blue-400 transition-all duration-300 '>
                <u> Sign Up</u>
            </Link>    
          </p>
        </div>
      </div>
      <div className='w-3/6 h-[80vh] flex justify-center items-center hidden lg:block mb-10 ml-10'>
        <div className="w-full h-full relative">
          <img
            className='absolute inset-0 w-full h-full object-cover rounded-2xl drop-shadow-xl mix-blend-lighten grayscale-25'
            src="./Loginnn.png"
            alt="Login"
          />
        </div>
      </div>
    </div>
  )
}

export default Login