import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';


const OrderHistory = () => {
  const headers = {
    id : localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const [OrderHistory, setOrderHistory] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/order-history", { headers });
      setOrderHistory(response.data.data);
    }
    fetch();
  },);
  return (
    <>
      {!OrderHistory && <div className="flex items-center justify-center w-full h-screen"><Loader />{" "}</div>}

      {OrderHistory && OrderHistory.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-2xl mb-2">Looks like it's empty</h1>
          <p className="text-sm">Looks like you haven't order anything yet.</p>
          <button
            className="bg-blue-500 text-white border border-blue-700 rounded p-2 mt-4 
                      hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            onClick={() => {
              window.location.href = '/all-books';
            }}
            >
            Purchase some Books
          </button>
        </div>
      )}

      {OrderHistory && OrderHistory.length > 0 && (
        <div className='h-screen p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-200 mb-8 text-center'>Your Order History</h1>
          <div className='mt-4 bg-zinc-800 w-full rounded px-4 py-2 flex gap-2 mb-4'>
            <div className='w-[3%]'>
              <h1 className='text-center'>Sr.</h1>
            </div>
            <div className='w-[22%]'>
              <h1 className=''>Books</h1>
            </div>
            <div className='w-[45%]'>
              <h1 className=''>Description</h1>
            </div>
            <div className='w-[9%]'>
              <h1 className=''>Price</h1>
            </div>
            <div className='w-[16%]'>
              <h1 className=''>Status</h1>
            </div>
            <div className='w-none md:w-[5%] hidden md:block'>
              <h1 className=''>Mode</h1>
            </div>
          </div>
          {OrderHistory.map((items,index) => (
            <div key={items._id} className='bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 mb-2'> 
              <div className='w-[3%]'>
                <h1 className='text-center'>{index+1}</h1>
              </div>
              <div className='w-[22%]'>
                <Link to={`/book-details/${items.book._id}`} className='hover:text-blue-300 cursor-pointer'>{items.book.title}</Link>
              </div>
              <div className='w-[45%]'>
                <h1 className=''>{items.book.desc.slice(0,50)} ...</h1>
              </div>
              <div className='w-[9%]'>
                <h1 className=''>Rs. {items.book.price}</h1>
              </div>
              <div className='w-[16%]'>
                <h1 className='font-semibold text-green-500'>
                  {items.status=== "order placed" ?(
                    <div className='text-yellow-500'>{items.status}</div>

                  ): items.status=== "cancelled" ?(
                    <div className='text-red-500'>{items.status}</div>

                  ):(
                    items.status
                  )}
                </h1>
              </div>
              <div className='w-none md:w-[5%] hidden md:block'>
                <h1 className='text-sm tex-zinc-400'>COD</h1>
              </div>

            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default OrderHistory