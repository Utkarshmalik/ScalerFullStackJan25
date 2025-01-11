import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PageNotFound from './Pages/PageNotFound';
import Movies from './Pages/Movies';
import Bookings from './Pages/Bookings';
import Payments from './Pages/Payments';
import SingleMoviePage from './Pages/SingleMoviePage';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);


    const onLogin = ()=>{
      setIsLoggedIn(true);
    }

    const onLogout = ()=>{
      setIsLoggedIn(false);
    }

  return (
    <div className="App">

      <BrowserRouter>

      <Routes>
      
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/payments" element={<Payments/>} />

        <Route path="/movies/:id" element={<SingleMoviePage/>} />
      

        <Route path="/MakePayment" element={<Navigate to="/payments"> </Navigate> } />


        <Route path="*" element={<PageNotFound/>} />

      </Routes>


      </BrowserRouter>

  
    </div>
  );
}

export default App;






//SPAs : Single Page Applications

