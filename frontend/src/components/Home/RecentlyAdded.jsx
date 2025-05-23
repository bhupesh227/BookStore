import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookCard from '../BookCard/BookCard';
import Loader from '../Loader/Loader.jsx';

const RecentlyAdded = () => {
  const [Data,setData] = useState();
  useEffect(() => {
    const fetch = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get-recent-books`);
        setData(response.data.data);
    }
    fetch();
  }, []);
  return (
    <div className='mt-8 lg:px-4 px-2'>
        <h4 className='text-3xl text-yellow-100'>Recently Added Books</h4>
        {!Data && <div className='flex items-center justify-center my-8'>
            <Loader/>{' '}
        </div>}
        <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5'>
            {Data && Data.map((items, i) =>(
                <div key={i}>
                    <BookCard data={items}/>{" "}
                </div> )
            )}
        </div>
    </div>
  )
}

export default RecentlyAdded