import { useState } from 'react'
import './App.css'
import IntroScreen from "./Components/IntroScreen/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen/index.jsx";
import GameScreen from "./Components/GameScreen/index.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/StoryPage/" element={<StoryScreen />} />
                <Route path="/game/" element={<GameScreen/>} />
                </Routes>
             </BrowserRouter>
    </>
  )
}

export default App
