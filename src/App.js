import React from "react";
import "./App.css";

import Navbar from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Yuki from "./components/Yuki/Yuki";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Home />
        <Portfolio />
        <Yuki />
        <Contact />
      </div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

