import { useEffect, useState, createContext } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import WatchList from './Pages/WatchList/WatchList';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Pages/Counter/counter';
import TodoList from './Pages/TodoList/TodoList';
import User from './Pages/User/User';
import AuthHoc from './hoc/AuthHoc';


export const WatchListContext = createContext();
export const ThemeContext = createContext();

function App() {

  var existingMoviesInAWatchList = JSON.parse(localStorage.getItem("watchList"));

  if(existingMoviesInAWatchList==null){
    existingMoviesInAWatchList = [];
  }

  console.log(existingMoviesInAWatchList);


  const [watchlist, setWatchList] = useState(existingMoviesInAWatchList);
  const [theme, setTheme]= useState("light");


  const toggleTheme = ()=>{

    if(theme==="light"){
      setTheme("dark");
    }else{
      setTheme("light");
    }

  }

  useEffect(()=>{
    console.log("Save Watchlist to local storage");
    localStorage.setItem("watchList",JSON.stringify(watchlist));
  },[watchlist])


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

    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <Navbar/>
    <WatchListContext.Provider value={{watchlist:watchlist,addMovieToAWatchList:addMovieToAWatchList,removeMovieFromAWatchList:removeMovieFromAWatchList}}>
    <Routes>
      <Route path='/' element={  
        <Home />

    }  />
      <Route path='/watchlist' element={
       <AuthHoc>
        <WatchList />
       </AuthHoc>
    }  />
      <Route path='/counter' element={
        
        <AuthHoc>
        <Counter />
        </AuthHoc>
        
        }  />
      <Route path='/todo' element={
      
        <AuthHoc>
        <TodoList />
        </AuthHoc>
        
        }  />
      <Route path='/user' element={

        <AuthHoc>
        <User />
        </AuthHoc>
        
        }  />


    </Routes>
    </WatchListContext.Provider>
    </ThemeContext.Provider>

    </BrowserRouter>
    </>
  )
}

export default App
