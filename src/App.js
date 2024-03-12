import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </div>
    </Router>
  );
};

export default App;
