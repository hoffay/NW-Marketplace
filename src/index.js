import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/Header/navBar';
import Home from './Pages/Home/Home';
import Solutions from './Pages/Solutions/Solutions';
import Food from './Pages/Solutions/Food/Food';

ReactDOM.render(
  <Router>
      <header>
        <NavBar/>
      </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/food" element={<Food />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
