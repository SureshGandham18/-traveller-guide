import React from 'react';
import './style.css';
import Header from './Header';
import Home from './Home';
import States from './States';
import Andhra from './Andhra';
import Tamil from './Tamil';
import Telan from './Telan';
import Punjab from './Punjab';
import Karnataka from './Karnataka';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/states" element={<States />} />
          <Route path="/andhra" element={<Andhra />} />
          <Route path="/tamil" element={<Tamil />} />
          <Route path="/telan" element={<Telan />} />
          <Route path="/punjab" element={<Punjab />} />
          <Route path="/karnataka" element={<Karnataka />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
