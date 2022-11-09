import React from 'react';
import{BrowserRouter as Router, Routes, Route}from'react-router-dom'
import './App.css';
import {Sales} from "./Components/Sales";
import {Layout} from "./Components/Layout";
import {About} from "./Components/About";
import {Gallery} from "./Components/Gallery";
import {Contact} from "./Components/Contact";
import {SignIn} from "./Components/SignIn";

function App() {
  return (
      <Router>
          <Layout/>
          <Routes>
              <Route path={'/sales'} element={<Sales/>}/>
              <Route path={'/about'} element={<About/>}/>
              <Route path={'/gallery'} element={<Gallery/>}/>
              <Route path={'/contact'} element={<Contact/>}/>
              <Route path={'/signin'} element={<SignIn/>}/>
          </Routes>
      </Router>
  );

}

export default App;
