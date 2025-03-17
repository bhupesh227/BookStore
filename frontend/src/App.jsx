import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes,Route, } from 'react-router-dom'
import AllBooks from './pages/AllBooks.jsx'
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/all-books' element={<AllBooks/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/book-details/:id' element={<BookDetails/>}/>
        </Routes>
        <Footer/>
      

    </div>
  )
}

export default App