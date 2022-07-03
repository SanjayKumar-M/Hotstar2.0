import React from 'react'
import styled from 'styled-components'
import Header from "./Components/Header"
import Home from "./Components/Home"
import Detail from './Components/Detail'
import Login from "./Components/Login"
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="detail" element = {<Detail />} />
            <Route path = "login" element = { <Login />}/>
          <Route path = "/" element = {<Home />} />
            
        </Routes>
      </Router>
    </div>
  )
}

export default App