import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Body from './components/Home/body/Body';
import Contact from './components/contact/Contact';
import Resume from './components/Resume/Resume';


const App = () => {
  return (
    <>
      <Routes>



        <Route path="/" element={<Home />} >
          <Route index element={<Body />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Resume />} />
        </Route>



      </Routes>
    </>
  );
}

export default App;
