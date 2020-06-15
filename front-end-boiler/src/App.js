import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer"
import Home from "./Components/Home"


function App() {
  return (
    <div className="App">
      <Navigation />

 <Route path="/" component={Home} />

      <div className="footer">
         <Footer />
      </div>
    </div>
  );
}

export default App;
