
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Practice from "./Practice";

const App = () => {
 
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Practice/>} />
    </Routes>
   </> 
  );
};

export default App;
