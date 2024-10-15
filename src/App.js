import Header from './common/header/header'; 
import Home from './pages/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Shopcart from './pages/Shopcart';

function App() {
  let [count, setcount] = React.useState(0);

  function updateCounter(val){
    setcount((prev)=>prev+val)
  }

  return (
    <Router>
      <Header count = {count}/>
      <Routes>
        <Route path='/' element={<Home updateCount = {updateCounter}/>} /> 
        <Route path='/cart' element={<Shopcart />} /> 
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
