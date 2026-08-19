
import { AboutMe } from '../AboutMe/AboutMe'
import { Awards } from '../Awards/Awards'
import { Blog } from '../Blog/Blog'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
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
        <Experience/>
        <Blog/>
        <Footer/>
      </div>
    </>
  )
}

export default App
