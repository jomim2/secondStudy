import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import GuestBook from "./pages/GuestBook";
import Home from "./pages/Home";
import './style/main.scss';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/guestbook" element={<GuestBook />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
