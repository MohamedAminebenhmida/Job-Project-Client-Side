import './App.css';
import {Route, Routes} from 'react-router-dom'
import NavBar from './Components/NavBar';
import LandPage from './Pages/LandPage/LandPage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Register from './Pages/Register'
import Profile from './Pages/Profile/Profile'
import EditProfile from './Pages/Profile/EditProfile'
import Sent from './Pages/LandPage/LandPage-Components/Sent';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './Redux/AuthSlice';
import PrivateRoute from './Components/PrivateRoute';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Posts from './Pages/Posts';
import PostCard from './Pages/posts/PostCard';
function App() {
  const dispatch=useDispatch()
  useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(currentUser());
        }
    }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
<Route path='/' element={<LandPage />} />
<Route path='/login' element={<Login />} />
<Route path='/register' element={<Register/>} />
<Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>} />
<Route path='/EditProfile' element={<PrivateRoute><EditProfile/></PrivateRoute>} />
<Route path='/sent' element={<Sent/>} />
<Route path='/Post' element={<Posts />} />
<Route path='/Post/PostCard/:id' element={<PostCard />} />
<Route path='*' element={<NotFound/>} />
</Routes>
 <ToastContainer position="top-left" autoClose={3000} />
    </div>
  );
}

export default App;
