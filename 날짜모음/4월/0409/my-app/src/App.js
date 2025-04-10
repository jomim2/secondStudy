import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ScrollText from "./pages/ScrollText";
import GuestBook from "./pages/GuestBook";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<ScrollText />} />
          <Route path="/gallery" element={<GuestBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
