import React, { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../components/Loader/Loader';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const Navigate = useNavigate();
  const [Cart, setCart] = useState();
  const [Total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get-cart`, { headers });
        setCart(response.data.data);
      } catch (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.message || 'Something went wrong!');
        }
        else {
          alert('An unexpected error occurred');
      }
    };
  };
    fetch();
  }, [Cart]);

  const deleteItem = async (bookid) => {
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/remove-from-cart/${bookid}`,{}, { headers });
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = 0;
      Cart.forEach((item) => {
        total += item.price;
      });
      setTotal(total);
      total = 0;
    }
  }, [Cart]);
  const PlaceOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/place-order`, {order:Cart}, { headers });
      alert(response.data.message);
      Navigate('/profile/orderHistory');
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message || 'Something went wrong!');
      }
      else {
        alert('An unexpected error occurred');
      }
    }
  }

  return (
    <div className="bg-zinc-900 px-6 py-8 min-h-screen">
      {!Cart && <div className="flex items-center justify-center w-full h-screen"><Loader />{" "}</div>}
      {Cart && Cart.length === 0 && (
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <h1 className="text-2xl mb-2">Your cart is empty</h1>
          <p className="text-sm">Looks like you haven't added anything yet.</p>
          <button
            className="bg-blue-500 text-white border border-blue-700 rounded p-2 mt-4 
                      hover:bg-blue-600 transition-all duration-300 cursor-pointer"
            onClick={() => {
              window.location.href = '/all-books';
            }}
          >
            Go to Books
          </button>
        </div>
      )}
      {Cart && Cart.length > 0 && (
        <>
          <h1 className="text-5xl font-bold text-zinc-100 mb-8">Your Cart</h1>
          {Cart.map((item, i) => (
            <div
              className="w-full my-4 rounded-lg p-4 bg-zinc-800 flex flex-col lg:flex-row 
                        justify-between items-center hover:shadow-md transition-shadow duration-300"
              key={i}
            >
              <img src={item.url} alt="/" className="h-[20vh] lg:h-[10vh] object-cover rounded" />
              <div className="w-full lg:w-auto mt-4 lg:mt-0">
                <h1 className="text-2xl text-zinc-100 font-semibold">{item.title}</h1>
                <p className="text-zinc-400 mt-2 hidden lg:block">
                  {item.desc.slice(0, 100)}...
                </p>
                <p className="text-zinc-400 mt-2 lg:hidden">
                  {item.desc.slice(0, 65)}...
                </p>
              </div>
              <div className="flex items-center justify-between w-full lg:w-auto mt-4 lg:mt-0 lg:ml-4">
                <h2 className="text-zinc-100 text-3xl font-semibold">Rs. {item.price}</h2>
                <button
                  className="bg-red-500 text-white border border-red-700 rounded p-2 ms-4 
                            flex items-center hover:bg-red-800 transition-colors duration-300 cursor-pointer"
                  onClick={() => deleteItem(item._id)}
                >
                  <AiFillDelete className="mr-1" />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      {Cart && Cart.length > 0 && (
        <div className='mt-4 w-full flex items-center justify-end'>
          <div className='p-4 bg-zinc-800 rounded'>
            <h1 className='text-3xl text-zinc-200 font-semibold'>Total Amount :-</h1>
            <div className='flex items-center justify-between text-xl text-zinc-200 mt-4'>
              <h2>{Cart.length} Books</h2><h2>{Total}</h2>
            </div>
            <div className='w-[100%] mt-3'>
              <button
                className='bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-600 hover:text-white transition-all duration-300 cursor-pointer'
                onClick={PlaceOrder}>
                  Proceed to Checkout
              </button>
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

export default Cart