
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
function App() {


  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path = "/home" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/dashboard" element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
