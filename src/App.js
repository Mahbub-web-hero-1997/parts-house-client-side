
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
