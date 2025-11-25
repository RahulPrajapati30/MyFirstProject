import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aboutus from './routing/Aboutus'
import Help from './routing/Help'
import Movies from './routing/Movies'
import Home from './routing/Home'
import Shows from './routing/Shows'
import Navbar from './design/Navbar'
import Base from './design/Base'
import Getstarted from './design/Getstarted'

import { BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route element={<Base/>} path='/' />
          <Route element={<Navbar/>} path='/Navbar' />
          <Route element={<Home/>} path='/home' />
          <Route element={<Shows/>} path='/shows' />
          <Route element={<Movies/>} path='/movies' />
          <Route element={<Aboutus/>} path='/aboutus' />
          <Route element={<Help/>} path='/help' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App