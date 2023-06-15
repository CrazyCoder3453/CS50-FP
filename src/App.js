import React from "react";
import Home from "./components/Home";
import Fun from "./components/Fun";
import Merch from "./components/Merch";
import Certificates from "./components/Certificates";
import { Routes, Route } from "react-router-dom";

function App() {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/fun" element={<Fun />}/>
    <Route path="/merch" element={<Merch />}/>
    <Route path="/certificates" element={<Certificates />}/>
  </Routes>;
}

export default App;
