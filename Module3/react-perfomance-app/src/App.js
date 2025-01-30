import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { lazy, Suspense } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CountPage from './pages/CountPage';
import Items from './pages/ItemsPage';

const AboutPage = lazy(()=>import("./pages/AboutPage"));
const ContactPage = lazy(()=>import("./pages/ContactPage"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div> Loading.... </div>} >
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/counter' element={<CountPage/>} />
        <Route path='/items' element={<Items/>} />

      </Routes>
      </Suspense>

    </Router>
  );
}

export default App;
