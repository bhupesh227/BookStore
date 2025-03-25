import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNav = () => {
    const role = useSelector((state) => state.auth.role);
  return (
    <>
        {role === "user" && (
            <div className='w-full flex items-center justify-between my-8 gap-4 lg:hidden '>
                <Link to='/profile' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                    Favourites
                </Link>
                <Link to='/profile/orderHistory' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                    History
                </Link>
                <Link to='/profile/settings' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                    Settings
                </Link>
            </div>
        )}
        {role === "admin" && (
            <div className='w-full flex items-center justify-between lg:hidden gap-4 my-8'>
                <Link to='/profile' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                    All Orders
                </Link>
                <Link to='/profile/add-book' className='bg-zinc-700 text-zinc-100 text-lg font-semibold py-2 w-full text-center hover:bg-zinc-900 rounded transition-all duration-300'>
                    Add Book
                </Link>
            </div>
        )}
</>
  )
}

export default MobileNav