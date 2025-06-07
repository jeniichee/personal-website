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
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Portfolio />
                <Contact />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <About />
                <Contact />
              </>
            }
          />

          <Route
            path="/yuki"
            element={
              <>
                <Yuki />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
