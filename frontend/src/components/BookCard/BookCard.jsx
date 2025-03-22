import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BookCard = ({data, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid : data._id,
  };
  const handleRemoveBook = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/api/v1/remove-favourite`,{}, {headers});
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'Something went wrong!');
      } else {
        alert('An unexpected error occurred.');
      }
      
    }
    
  };
  return (
    <div className='bg-zinc-800 rounded p-4 flex flex-col h-full justify-between'>
        <Link to={`/book-details/${data._id}`}>
            <div className=''>
                <div className='bg-zinc-900 rounded flex items-center justify-center'>
                    <img src={data.url} alt="/" className='h-[30vh]'/>
                </div>
                <h2 className='pl-4 lg:pl-2 mt-4 text-xl font-semibold h-[auto] text-white'>{data.title}</h2>
                <p className='pl-4 lg:pl-2 mt-2 text-zinc-400 font-semibold '>By {data.author}</p>
                <p className='pl-4 lg:pl-2 mt-2 text-zinc-200 font-semibold text-xl'>Rs. {data.price}</p>
            </div>
        </Link>
        {favourite && (
          <button className='bg-yellow-500 px-4 py-2 rounded border border-yellow-500 text-white mt-4 hover:bg-yellow-600 cursor-pointer'
            onClick={handleRemoveBook}>
              Remove from favourites
          </button>
        )}

    </div>
  );
};

export default BookCard