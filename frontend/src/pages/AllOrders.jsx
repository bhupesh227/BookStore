import React ,{useEffect, useState}from 'react'
import axios from 'axios';
import Loader from '../components/Loader/Loader.jsx';
import { FaCheck, FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoOpenOutline } from "react-icons/io5";
import SeeUserData from './SeeUserData.jsx';

const AllOrders = () => {
  const [AllOrders, setAllOrders] = useState();
  const [Options, setOptions] = useState(-1);
  const [Value, setValue] = useState({status : ""});
  const [UserDiv, setUserDiv] = useState("hidden");
  const [UserDivData, setUserDivData] = useState();
  const headers = {
    id : localStorage.getItem('id'),
    authorization : `Bearer ${localStorage.getItem('token')}`,
  };
  useEffect(() => {
    const fetch = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/all-orders`, {headers});
        setAllOrders(response.data.data);
    }
    fetch();
  }, []);

  const change = (e) => {
    const {value} = e.target;
    setValue({status : value});
  };

  const submitChanges = async (index) => {
    try {
      const id = AllOrders[index]._id;
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/update-status/${id}`, Value, {headers});
      const updated = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/all-orders`, { headers });   //  Re-fetch updated orders
      setAllOrders(updated.data.data);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <>
      {!AllOrders && <div className="flex items-center justify-center w-full h-screen"><Loader />{" "}
      </div>}

      {AllOrders && AllOrders.length>0 && (
        <div className='h-screen p-0 md:p-4 text-zinc-100'>
          <h1 className='text-3xl md:text-5xl font-semibold text-zinc-200 mb-8 text-center'>All Order History</h1>
          <div className='mt-4 bg-zinc-800 w-full rounded px-4 py-2 flex gap-2 mb-4'>
            <div className='w-[3%]'>
              <h1 className='text-center'>Sr.</h1>
            </div>
            <div className='w-[40%]'>
              <h1 className=''>Books</h1>
            </div>
            <div className='w-0 md:w-[45%] hidden md:block'>
              <h1 className=''>Description</h1>
            </div>
            <div className='w-[17%] md:w-[9%]'>
              <h1 className=''>Price</h1>
            </div>
            <div className='w-[30%] md:w-[16%]'>
              <h1 className=''>Status</h1>
            </div>
            <div className='w-[10%] md:w-[5%] '>
              <h1 className=''><FaUserLarge/></h1>
            </div>
          </div>

          {AllOrders.map((order, index) => (
            <div key={order._id} className='bg-zinc-800 w-full rounded px-4 py-2 flex gap-2 hover:bg-zinc-900 mb-2 transition-all duration-300'>
              <div className='w-[3%]'>
                <h1 className='text-center'>{index+1}</h1>
              </div>
              <div className='w-[40%] md:w-[22%]'>
                <Link to={`/book-details/${order.book._id}`} className='hover:text-blue-300 cursor-pointer'>
                  {order.book.title}
                </Link>
              </div>
              <div className='w-0 md:w-[45%] hidden md:block'>
                <h1>{order.book.desc.slice(0,50)}...</h1>
              </div>
              <div className='w-[17%] md:w-[9%]'>
                <h1 className=''>Rs. {order.book.price}</h1>
              </div>
              <div className='w-[30%] md:w-[16%]'>
                <h1 className='font-semibold'>
                  <button className='hover:scale-105 transition-all duration-300 cursor-pointer' onClick={() => setOptions(index)}>
                    {order.status === "order placed" ? (
                      <div className='text-yellow-500'>{order.status}</div>
                    ): order.status === "cancelled" ? (
                      <div className='text-red-500'>{order.status}</div>
                    ):(
                      <div className='text-green-500'>{order.status}</div>
                    )}
                  </button>
                  <div className={`${Options ===index ? "block" : "hidden"} flex mt-2`}>
                    <select name="status" id="" className='bg-gray-800' onChange={change} value={Value.status}>
                      {[
                        "order placed",
                        "Out for delivery",
                        "delivered",
                        "cancelled",
                      ].map((items,i) => (
                        <option value={items} key={i}>{items}</option>
                      ))}
                    </select>
                    <button className='text-greeen-500 hover:text-pink-600 mx-2'
                      onClick={() => {
                        setOptions(-1);
                        submitChanges(index);
                      }}>
                        <FaCheck/>
                    </button>
                  </div>
                </h1>
              </div>
              <div className='w-[10%] md:w-[5%]'>
                <button
                  className='text-xl hover:text-orange-500'
                  onClick={()=>{
                    setUserDiv("fixed");
                    setUserDivData(order.user);
                  }}>
                    <IoOpenOutline/>
                  </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {UserDivData && (
        <SeeUserData UserDivData={UserDivData} UserDiv={UserDiv} setUserDiv={setUserDiv}/>
      )}
    </>
  )
} 

export default AllOrders