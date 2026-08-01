
import { AboutMe } from '../AboutMe/AboutMe'
import { Projects } from '../Projects/Projects'
import { Skills } from '../Skills/Skills'
import { Welcome } from '../Welcome/Welcome'
import './App.scss'



function App() {
  return (
    <>
      <div className="app">
        <Welcome/>
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
    </>
  )
}

export default App
