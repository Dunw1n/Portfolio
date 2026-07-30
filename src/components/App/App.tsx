
import { AboutMe } from '../AboutMe/AboutMe'
import { Welcome } from '../Welcome/Welcome'
import './App.scss'



function App() {
  return (
    <>
      <div className="app">
        <Welcome/>
        <AboutMe/>
      </div>
    </>
  )
}

export default App
