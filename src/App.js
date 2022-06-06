import Navbar from './Components/Navbar'
import React, { useState } from 'react'
import './App.css'
import TextForm from 'Components/TextForm'
import About from 'Components/About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  const toggleModeFunc = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
    } else if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  const [mode, setMode] = useState('light')
  const [active, setActive] = useState(1)
  return (
    <>
      <Router>
        <Navbar title={'TextUtils'} mode={mode} toggleMode={toggleModeFunc} />
        <Routes>
          <Route
            // @ts-ignore
            exact
            path="/about"
            element={
              <div className="py-3">
                <About mode={mode} pageTitle="TextUtils - About" isActive="2" />
              </div>
            }
          />

          <Route
            // @ts-ignore
            exact
            path="/"
            element={
              <div className="py-3">
                <TextForm
                  title={'Enter Text Here To Analyze'}
                  mode={mode}
                  pageTitle="TextUtils - Home"
                  isActive="1"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
