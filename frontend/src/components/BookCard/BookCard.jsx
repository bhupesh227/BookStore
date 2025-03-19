import React from 'react';
import { Link } from 'react-router-dom';
const BookCard = ({data}) => {
  return (
    <>
        <Link to={`/book-details/${data._id}`}>
            <div className='bg-zinc-800 rounded p-4 flex flex-col h-[100%]'>
                <div className='bg-zinc-900 rounded flex items-center justify-center'>
                    <img src={data.url} alt="/" className='h-[30vh]'/>
                </div>
                <h2 className='mt-4 text-xl font-semibold h-[auto] text-white'>{data.title}</h2>
                <p className='mt-2 text-zinc-400 font-semibold '>By {data.author}</p>
                <p className='mt-2 text-zinc-200 font-semibold text-xl'>Rs. {data.price}</p>
            </div>
        </Link>

    </>
  );
};

export default BookCard