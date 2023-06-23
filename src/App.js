import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './css/App.css';
import Navbar from './components/Navbar';

const Layout = () => (
  <>
    <div className="container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  </>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/calculator" element={<Layout><Calculator /></Layout>} />
      <Route path="/quote" element={<Layout><Quote /></Layout>} />
    </Routes>
  </BrowserRouter>
);

export default App;
