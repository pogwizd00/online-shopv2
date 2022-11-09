import React from 'react';
import './App.css';
import './Styles/NavBar.css';
import{BrowserRouter as Router, Routes, Route}from'react-router-dom'
import {SignIn} from "./Components/SignIn";
import {About} from "./Components/About";
import {Sales} from "./Components/Sales";

function App() {
  return (
        <Router>
            <div className="App">
                    <div className='container'>
                        <span>APwooder$</span>
                        <Routes>
                            <Route path={'/sales'} element={<Sales/>}/>
                        </Routes>
                        <span>Sales</span>
                        <span>About</span>
                        <span>Gallery</span>
                        <span>Contact</span>
                        <SignIn/>

                    </div>
            </div>
        </Router>
  );

}

export default App;
