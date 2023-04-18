import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Home from './components/homePage';
import Contact from './components/ContactUs';


import Home from './screens/Home';
import Listings from './components/listings';


function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/Listings" element={<Listings />} />
        </Routes>

      </div>
    </Router>
  );
}





export default App;
