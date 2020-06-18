import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "./Components/Home";
import Login from "./Login/Login";
import BadNav from "./Navigation/BadNav";
import Dashboard from "./Components/Dashboard";

import Logout from "./Components/Logout";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <BadNav />
    

      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/logout" component={Logout} />
      <div className="footer">
         <Footer />
      </div>
    </div>
  );
}

export default App;
