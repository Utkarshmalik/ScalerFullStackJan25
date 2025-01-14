import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import WatchList from './Pages/WatchList/WatchList';
import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <>

    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/watchlist' element={<WatchList/>}  />

    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
