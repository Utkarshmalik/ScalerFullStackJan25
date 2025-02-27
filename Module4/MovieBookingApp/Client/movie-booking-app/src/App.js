import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import '@ant-design/v5-patch-for-react-19';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
