import { useState } from 'react'
import './App.css'
import IntroScreen from "./Components/IntroScreen/index.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoryScreen from "./Components/StoryScreen/index.jsx";
import RecruiterLevel from "./Components/RecruiterLevel/index.jsx";
import FailedInterview from "./Components/FailedInterview/index.jsx";
import IntroToCto from "./Components/IntroToCto/index.jsx";
import CtoLevel from "./Components/CtoLevel/index.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IntroScreen />} />
                <Route path="/StoryPage/" element={<StoryScreen />} />
                <Route path="/game/" element={<RecruiterLevel/>} />
                <Route path="/failedInterview/" element={<FailedInterview/>} />
                <Route path="/IntroToCto/" element={<IntroToCto/>} />
                <Route path="/CtoLevel/" element={<CtoLevel/>} />
                </Routes>
             </BrowserRouter>
    </>
  )
}

export default App
