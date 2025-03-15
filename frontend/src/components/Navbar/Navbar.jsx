import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGripLines } from "react-icons/fa6";

const Navbar = () => {
    const links = [
        { title: 'Home', link: "/" },
        { title: "About Us", link: "/about-us" },
        { title: "All Books", link: "/all-books" },
        { title: "Cart", link: "/cart" },
        { title: "Profile", link: "/profile" },
    ];
    
    const [MobileNav, setMobileNav] = useState("hidden");
    const handleLinkClick = () => {
        setMobileNav("hidden");
    };

    return (
        <>
            <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
                <Link to={"/"} className='flex items-center'>
                    <img className='h-10 me-4' 
                        src="https://cdn-icons-png.flaticon.com/128/10433/10433049.png" alt="logo" />
                    <h1 className='text-2xl font-semibold'>BookMenia</h1>
                </Link>
                
                <div className='nav-links-bookmenia hidden md:flex items-center gap-4'>
                    {links.map((items, i) => (
                        <Link to={items.link} className="hover:text-blue-400 transition-all duration-300" key={i}>
                            {items.title}{" "}
                        </Link>
                    ))}
                </div>

                <div className='hidden md:flex gap-4'>
                    <Link to={"/Login"} className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                        Log In
                    </Link >
                    <Link to={"/SignUp"} className='px-4 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                        Sign Up
                    </Link >
                </div>

                <button 
                    className='md:hidden text-white text-2xl hover:text-zinc-400' 
                    onClick={() => setMobileNav(MobileNav === "hidden" ? "block" : "hidden")}
                >
                    <FaGripLines />
                </button>
            </nav>

           
            <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
                {links.map((items, i) => (
                    <Link 
                        to={items.link} 
                        className="text-white text-4xl mb-7 font-semibold hover:text-blue-400 transition-all duration-300" 
                        key={i}
                        onClick={handleLinkClick}
                    >
                        {items.title}{" "}
                    </Link>
                ))}

                <Link 
                    to={"/Login"} 
                    className="px-8 mb-8 text-3xl font-semibold py-2 border border-blue-500 text-white rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                    onClick={handleLinkClick}
                >
                    Log In
                </Link >
                <Link 
                    to={"/SignUp"} 
                    className="px-8 mb-8 text-3xl font-semibold py-2 bg-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300"
                    onClick={handleLinkClick}
                >
                    Sign Up
                </Link >
            </div>
        </>
    );
};

export default Navbar;
