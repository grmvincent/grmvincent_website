import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NoMatch from "./pages/nomatch/NoMatch";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;