import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Parts from './pages/Parts/Parts';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/parts' element={<Parts></Parts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
