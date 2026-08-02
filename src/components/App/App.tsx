
import { AboutMe } from '../AboutMe/AboutMe'
import { Awards } from '../Awards/Awards'
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
        <Awards/>
      </div>
    </>
  )
}

export default App
