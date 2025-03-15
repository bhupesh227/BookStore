import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Loader/Loader';
import { GrLanguage } from 'react-icons/gr'; 

const BookDetails = () => {
  const {id} = useParams();
  const [Data,setData] = useState();
    useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(`http://localhost:3000/api/v1/book-details/${id}`);
          console.log(response.data.data);
          setData(response.data.data);
      }
      fetch();
    }, [id]);
  return (
    <>
        {Data && (
            <div className='px-5 lg:px-12 py-8 bg-zinc-900 flex flex-col md:flex-row  gap-8 '>
                <div className='bg-zinc-800 rounded p-4 h-[50vh] lg:h-[85vh] lg:w-3/6 flex items-center justify-center'>
                    {" "}
                    <img src={Data.url} alt="image" className='h-[40vh] lg:h-[70vh] w-[65vh] rounded'/>
                </div>
                <div className='p-4 lg:w-3/6'>
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