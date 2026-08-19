
import { AboutMe } from '@components/AboutMe/AboutMe'
import { Awards } from '@components/Awards/Awards'
import { Blog } from '@components/Blog/Blog'
import { Experience } from '@components/Experience/Experience'
import { Footer } from '@components/Footer/Footer'
import { Projects } from '@components/Projects/Projects'
import { Skills } from '@components/Skills/Skills'
import { Welcome } from '@components/Welcome/Welcome';
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
