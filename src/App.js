import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Events from "./components/Events";
import Home from "./components/Home";
import News from "./components/News";
function App() {
  return (
    <Router>
      <div className="body__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/news" element={<News/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
