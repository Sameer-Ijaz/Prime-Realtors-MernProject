import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from './components/homePage';
import Contact from './components/ContactUs';
import Login from './components/Login';
import Listings from './components/listings';
import AdminPanel from './components/adminPanel';
import Register from './components/Register';
import AdminPanelAdd from './components/adminPanelAdd';
import AdminPanelAddUpdate from './components/adminPanelUpdate';


function App() {
  return (
    <Router>
    <div >
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Listings" element={<Listings/>}/>
        <Route path="/admin-add" element={<AdminPanelAdd/>}/>
        <Route path="/adminPanel" element={<AdminPanel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin-update/:id" element={<AdminPanelAddUpdate/>}/>
        

      </Routes>
      
    </div>
    </Router>
  );
}





export default App;
