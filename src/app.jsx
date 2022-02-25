import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";

const App = function () {
  return (
     <Routes>
        <Route path="/"  element={<Home />} />
     </Routes>
  )
}

export default App;