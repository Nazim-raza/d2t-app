import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Web from './components/Web';
import Contact from './components/Contact';
import Intern from './components/Intern';
 
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";



import './App.css';
const App = () => {
  return (
    <>
      <HashRouter>
        <div>
          <Navbar />
      
        <Routes>

          <Route path="/" element={<Web />}>
          </Route>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/intern' element={<Intern />}></Route>
        </Routes>
         </div>
      </HashRouter>

    </>

  )
}

export default App
