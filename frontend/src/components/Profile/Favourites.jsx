import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from '../BookCard/BookCard';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get-favourites`, {headers});
      setFavouriteBooks(response.data.data);
    };
    fetch();
  },[FavouriteBooks]);
  return (
    <>
      {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className='w-full h-[100%] flex items-center justify-center flex-col max-lg:mt-7'>
          <h1 className='text-3xl text-blue-500 font-semibold'>No Favourite Books Found</h1>
          <img src="https://img.icons8.com/ios/452/nothing-found.png" alt="no-favourites" className='h-[15vh] mt-4 '/>
        </div>
      )}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 items-stretch'>
      {FavouriteBooks && FavouriteBooks.map((items, i)=>(
        <div key={i}>
          <BookCard data={items} favourite={true}/>
        </div>
      ))}
    </div>
    </>
    
  
  );
};


export default Favourites