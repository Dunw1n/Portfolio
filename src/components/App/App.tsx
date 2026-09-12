
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home/Home'
import { Footer } from '../Footer/Footer'
import { NotFound } from '@pages/NotFound/NotFound'



function App() {
  return (
    <>
      <div className="app">
          <Routes>
            <Route path={"/"} element={ <Home/> } />
            <Route path={"/admin"} element={ <Home/> } />
            <Route path={"/*"} element={ <NotFound/> } />
          </Routes>

          <Footer/>
      </div>
    </>
  )
}

export default App
