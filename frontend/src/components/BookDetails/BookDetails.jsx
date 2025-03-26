import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Loader/Loader';
import { GrLanguage } from 'react-icons/gr'; 
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { MdModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const BookDetails = () => {
  const {id} = useParams();
  const [Data,setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  const navigate = useNavigate();
    useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(`http://localhost:3000/api/v1/book-details/${id}`);
          setData(response.data.data);
      }
      fetch();
    }, [id]);

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`,
        bookid: id,
    }
    const handleFavourite = async () => {
        try {
           const response = await axios.put(`http://localhost:3000/api/v1/add-favourite`,{},{headers});
            alert(response.data.message); 
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || 'Something went wrong!');
              } else {
                alert('An unexpected error occurred.');
              }
        }  
    }
    const handleCart = async () => {
        try {
           const response = await axios.put(`http://localhost:3000/api/v1/add-to-cart`,{},{headers});
            alert(response.data.message); 
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || 'Something went wrong!');
              } else {
                alert('An unexpected error occurred.');
              }
        }
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/delete-book/${id}`,{headers});
            alert(response.data.message); 
            navigate('/all-books');
         } catch (error) {
            if (error.response) {
                alert(error.response.data.message || 'Something went wrong!');
            } else {
                alert('An unexpected error occurred.');
            }
        }  
    }
  return (
    <>
        {Data && (
            <div className='px-5 md:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row  gap-8 '>
                <div className='bg-zinc-800 rounded md:p-4 p-6 h-[60vh] md:h-[85vh] md:w-3/6 flex flex-col md:flex-row items-start justify-center'>
                    {" "}
                    <div className='w-full md:w-6/6 '>
                    {" "}
                        <img src={Data.url} alt="image" className='md:ml-4 ml-0 h-[50vh] md:h-[78vh] w-full md:w-5/6 rounded'/>
                    </div>
                    {isLoggedIn === true && role === "user" && (
                        <div className='flex flex-row md:flex-col items-center justify-center max-md:w-full gap-6 mt-4 ml-0 '>
                            <button className='bg-white rounded-full text-base md:text-3xl p-2 text-red-500 flex items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer'
                                onClick={handleFavourite}>
                                    <FaHeart/>{" "}
                                    <span className='ms-4 block md:hidden '>Favourites</span>
                            </button>
                            <button className='bg-blue-500 rounded-full text-base md:text-3xl p-2 text-white flex items-center justify-center hover:bg-white hover:text-blue-500 cursor-pointer'
                                onClick={handleCart}>
                                    <FaCartShopping/>{" "}
                                    <span className='ms-4 block md:hidden '>Add to Cart</span>
                            </button>
                    </div>
                    )}
                    {isLoggedIn === true && role === "admin" && (
                        <div className='flex flex-row md:flex-col items-center justify-center max-md:w-full gap-6 mt-4 ml-0 '>
                            <Link to={`/EditBook/${id}`} className='bg-white rounded-full text-xl font-semibold md:text-3xl p-2 max-md:px-4 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer'>
                                <MdModeEditOutline />{" "}
                                <span className='ms-4 block md:hidden '>Edit</span>
                            </Link>
                            <button className='text-red-500 rounded-full text-xl font-semibold md:text-3xl p-2 max-md:px-4 bg-white flex items-center justify-center hover:bg-red-500 hover:text-white cursor-pointer'
                                onClick={handleDelete}>
                                    <MdDeleteOutline />{" "}
                                    <span className='ms-4 block md:hidden '>Delete</span>
                            </button>
                    </div>
                    )}
                    
                    
                </div>
                <div className='p-4 md:w-3/6'>
                    <h1 className='text-4xl font-semibold text-zinc-100'>{Data.title}</h1>
                    <p className='mt-1 text-zinc-300'>By {Data.author}</p>
                    <p className='mt-4 text-xl text-zinc-400'>Rs. {Data.desc}</p>
                    <p className='flex mt-4 items-center justify-start text-zinc-300'>
                        <GrLanguage className='me-3'/>{Data.language}
                    </p>
                    <p className='mt-4 text-zinc-200 text-3xl font-semibold'>
                        Price : Rs. {Data.price}
                    </p>
                </div>
            </div>
        )}
        {!Data && (
            <div className='h-screen bg-zinc-900 flex items-center justify-center'>
                <Loader/>{' '}
            </div>
        )}
    </>
  )
}

export default BookDetails