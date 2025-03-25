import React, { useEffect } from 'react'
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
import BookDetails from './components/BookDetails/BookDetails.jsx';
import { useDispatch, useSelector} from 'react-redux';
import { authActions } from './store/auth.js'
import Favourites from './components/Profile/Favourites.jsx';
import OrderHistory from './components/Profile/OrderHistory.jsx';
import Settings from './components/Profile/Settings.jsx';
import AllOrders from './pages/AllOrders.jsx';
import AddBook from './pages/AddBook.jsx'
import EditBook from './pages/EditBook.jsx'


const App = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() =>{
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role") 
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, [dispatch]);

   /* const PrivateRoute = ({ element }) => {
      if (!localStorage.getItem("token")) {
        return <Navigate to="/Login" replace />;
      }
      return element;
    };*/

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/all-books' element={<AllBooks/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile/>}>
            {role === "user" ?(
              <Route index element={<Favourites />}/>
            ):(
              <Route index element={<AllOrders />}/>
            )}
            {role === "admin" && <Route path='/profile/add-book' element={<AddBook/>}/>}
            <Route path='/profile/orderHistory' element={<OrderHistory/>}/>
            <Route path='/profile/settings' element={<Settings/>}/>
          </Route>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/EditBook/:id' element={<EditBook/>}/>
          <Route path='/book-details/:id' element={<BookDetails/>}/>
        </Routes>
        <Footer/>
      

    </div>
  );
};

export default App