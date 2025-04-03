import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Yuki from "./components/Yuki/Yuki";
import Contact from "./components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Yuki />
      <Contact />
    </div>
    </BrowserRouter>
  );
}

export default App;

// TODO
// night mode or different modes (persistence...?)
// route to espresso/blog pages
