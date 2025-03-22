import React from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = ({data}) => {
  return (
    <div className='bg-zinc-800 p-4 mt-0 rounded flex flex-col items-center justify-between h-[100%] '>
        <div className='flex flex-col items-center justify-center w-full'>
            <img src={data.avatar} alt="avatar" className='h-[12vh] object-cover rounded-full ' />
            <p className='mt-3 text-zinc-100 font-semibold text-xl'>{data.username}</p>
            <p className='mt-1 text-normal text-zinc-300 w-full overflow-x-auto max-lg:text-center '>{data.email}</p>
            <div className='mt-4 h-[1px] w-full bg-zinc-500 hidden lg:block'></div>
        </div>
        <div className='w-full flex-col items-center justify-center hidden lg:flex'>
            <Link to='/profile' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                Favourites
            </Link>
            <Link to='/profile/orderHistory' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 mt-4 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                Order History
            </Link>
            <Link to='/profile/settings' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 mt-4 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                Settings
            </Link>
        </div>
        <button className='bg-zinc-900 lg:w-full w-3/6 text-white mt-4 lg:mt-0 font-semibold py-2 flex items-center justify-center hover:bg-white hover:text-zinc-900 rounded transition-all duration-300'>
            Log Out <FaArrowRightFromBracket className='ms-4'/>
        </button>
    </div>
  )
}

export default Sidebar