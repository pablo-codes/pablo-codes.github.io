import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Body from './components/Home/body/Body';
import Body2 from './components/Home/body/Body2';
import Contact from './components/contact/Contact';
import Resume from './components/Resume/Resume';
import Resume2 from './components/Resume/Resume2';

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
