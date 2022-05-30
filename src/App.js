import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Myorder from './pages/Dashboard/Myorder';
import Error from './pages/Error';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';
import RequireAuth from './pages/Home/RequireAuth/RequireAuth';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Parts from './pages/Parts/Parts';
import RequireNonAdmin from './pages/RequireNonAdmin';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import Payment from './pages/Payment/Payment'
import AddReview from './pages/Dashboard/AddReview';
import MyPortFolio from './pages/MyPortFolio';
import Blogs from './pages/Blogs';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='Portfolio' element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path='my-order' element={<Myorder></Myorder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='add-Review' element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
