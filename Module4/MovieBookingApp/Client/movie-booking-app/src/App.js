import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import '@ant-design/v5-patch-for-react-19';
import MovieDetail from './pages/MovieDetail';
import BookShow from './pages/BookShow';
import ForgetPassword from './pages/ForgetPassword';
import Reset from './pages/Reset';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/movie/:movieId' element={<MovieDetail/>}/>
        <Route path='/book-show/:showId' element={<BookShow/>}/>
        <Route path='/forget' element={<ForgetPassword/>}/>
        <Route path='/reset' element={<Reset/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
