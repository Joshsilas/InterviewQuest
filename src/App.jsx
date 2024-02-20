import { useState } from 'react'
import './App.css'
import IntroScreen from "./Components/IntroScreen/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen/index.jsx";
import Boss1 from "./Components/Boss1/index.jsx";

function App() {


  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/StoryPage/" element={<StoryScreen />} />
                <Route path="/boss1/" element={<Boss1/>} />
                </Routes>
             </BrowserRouter>
    </>
  )
}

export default App
