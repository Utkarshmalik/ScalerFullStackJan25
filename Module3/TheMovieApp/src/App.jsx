import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import WatchList from './Pages/WatchList/WatchList';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [watchlist, setWatchList] = useState([]);


  const addMovieToAWatchList=(movie)=>{
    setWatchList([...watchlist,movie]);
  }


  const removeMovieFromAWatchList=(movie)=>{

    const updatedWatchList = watchlist.filter((watchlistMovie)=>watchlistMovie.id!=movie.id);
    setWatchList(updatedWatchList);
  
  }

  return (
    <>

    <BrowserRouter>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home addMovieToAWatchList={addMovieToAWatchList} removeMovieFromAWatchList={removeMovieFromAWatchList} watchlist={watchlist}/>}  />
      <Route path='/watchlist' element={<WatchList removeMovieFromAWatchList={removeMovieFromAWatchList} watchlist={watchlist}/>}  />

    </Routes>


    </BrowserRouter>
    </>
  )
}

export default App
