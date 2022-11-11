import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/main/Home"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>


        <Route path='/' element={<Home />} />
        {/*<Route path='/projects' element={<Projects />} />
        <Route path='/accomplishments' element={<Accomplishments />} />
        <Route path='/myJourney' element={<MyJourney />} />
        <Route path='/techStack' element={<TechStack />} />
        <Route path='/documentation' element={<Documentation />} />*/}


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
