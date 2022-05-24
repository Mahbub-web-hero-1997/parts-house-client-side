
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
