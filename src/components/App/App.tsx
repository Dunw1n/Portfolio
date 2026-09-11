
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home/Home'
import { Blog } from '@pages/Blog/Blog'
import { Footer } from '../Footer/Footer'



function App() {
  return (
    <>
      <div className="app">
          <Routes>
            <Route path={"/"} element={ <Home/> } />
            <Route path={"/admin"} element={ <Home/> } />
            <Route path={"/blog"} element={ <Blog/> } />
          </Routes>

          <Footer/>
      </div>
    </>
  )
}

export default App
