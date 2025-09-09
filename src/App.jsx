
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Globe from './Components/Globe'
import Map from './Components/Twodmap'


function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/globe' element={<Globe />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
