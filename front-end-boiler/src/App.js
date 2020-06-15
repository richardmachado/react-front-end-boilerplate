import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "./Components/Home";
import Login from "./Login/Login";


function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />

      <div className="footer">
         <Footer />
      </div>
    </div>
  );
}

export default App;
