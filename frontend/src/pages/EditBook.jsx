import React ,{useEffect, useState}from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [Data, setData] = useState({
        url : '',
        title : '',
        author : '',
        price : '',
        desc : '',
        language : '',
    });
    const headers = {
        id : localStorage.getItem('id'),
        authorization : `Bearer ${localStorage.getItem('token')}`,
        bookid : id,
    };

    const change = (e) => {
        const {name, value} = e.target;
        setData({...Data, [name]: value});
    };
    
    const submit = async () => {
        try {
            if (
            Data.url === '' ||
            Data.title === '' ||
            Data.author === '' ||
            Data.price === '' ||
            Data.desc === '' ||
            Data.language === ''
            ) {
                alert('Please fill all the fields');
            } else {
                const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/v1/update-book`, Data, {headers});
                setData({
                    url : '',
                    title : '',
                    author : '',
                    price : '',
                    desc : '',
                    language : '',
            });
                alert(response.data.message);
                navigate('/book-details/'+id);
            }
            
        } catch (error) {
            alert(error.response.data.message);
        }
    }
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/book-details/${id}`);
            setData(response.data.data);
        }
        fetch();
      }, []);
  return (
    <div className='h-screen p-0 md:p-4 bg-zinc-900'>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-200 mb-8 text-center'>Edit Book</h1>
        <div className='p-4 bg-zinc-800 rounded flex justify-center flex-col w-full md:w-3/6 mx-auto'>
        <div>
            <label htmlFor="" className='text-zinc-400'>Image</label>
            <input 
            type="text"
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='Url of Image'
            name='url'
            required
            value={Data.url}
            onChange={change}
            />
        </div>
        <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Title</label>
            <input 
            type="text"
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='Title'
            name='title'
            required
            value={Data.title}
            onChange={change}
            />
        </div>
        <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Author</label>
            <input 
            type="text"
            className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
            placeholder='Author'
            name='author'
            required
            value={Data.author}
            onChange={change}
            />
        </div>
        <div className='mt-4 flex gap-4'>
            <div className='w-3/6'>
                <label htmlFor="" className='text-zinc-400'>Language</label>
                <input 
                type="text"
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='Language'
                name='language'
                required
                value={Data.language}
                onChange={change}
                />
            </div>
            <div className='w-3/6'>
            <label htmlFor="" className='text-zinc-400'>Price</label>
            <input 
                type="number"
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='Price'
                name='price'
                required
                value={Data.price}
                onChange={change}
            />
            </div>
        </div>
        <div className='mt-4'>
            <label htmlFor="" className='text-zinc-400'>Description</label>
            <textarea
                className='w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                rows={5}
                placeholder='Description'
                name='desc'
                required
                value={Data.desc}
                onChange={change}
            />
        </div>
        <button
            className='mt-4 px-4 bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-all duration-300 '
            onClick={submit}>
            Submit
        </button>
        </div>
    </div>
  )
}

export default EditBook