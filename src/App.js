import React from "react";
import { Routes, Route } from "react-router-dom";
import Movie from "./Movie";

const App = () => {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Movie/>} />
    </Routes>
   </> 
  );
};

export default App;
