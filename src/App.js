
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About.js';
import React, { useState } from 'react';

function App() {
  const[mode,setmode]=useState('light');
  const togglemode=()=>{
    if (mode==='light'){
      setmode('dark')
    }
    else{
      setmode('light')
    }
  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<div className="container my-3" >
       <TextForm heading="Enter the text to analyze below"/>
       {/* <About/> */}
</div>

    </>
  );
}

export default App;
