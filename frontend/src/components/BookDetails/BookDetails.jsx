import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../Loader/Loader';


const BookDetails = () => {
  const {id} = useParams();
  const [Data,setData] = useState();
    useEffect(() => {
      const fetch = async () => {
          const response = await axios.get(`http://localhost:3000/api/v1/book-details/${id}`);
          console.log(response);
          setData(response.data.data);
      }
      fetch();
    }, [id]);
  return (
    <div className='px-12 py-8 bg-zinc-900 flex gap-8'>
        <div className='bg-zinc-800 rounded p-4 h-screen'>bbbbb</div>
        <div className='p-4'></div>
    </div>
  )
}

export default BookDetails