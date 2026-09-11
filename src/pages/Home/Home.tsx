import { HeadAdmin } from "@components/HeadAdmin/HeadAdmin"
import { AboutMe } from "@components/AboutMe/AboutMe"
import { Awards } from "@components/Awards/Awards"
import { Blog } from "@components/Blog/Blog"
import { Experience } from "@components/Experience/Experience"
import { Projects } from "@components/Projects/Projects"
import { Skills } from "@components/Skills/Skills"
import { Welcome } from "@components/Welcome/Welcome"

import { useLocation } from "react-router-dom"

export default function Home(){
    const location = useLocation();

    return (
        <>
            { 
                location.pathname === "/admin" ? <HeadAdmin/> : null
            }
            <Welcome/> 
            <AboutMe/>
            <Skills/>
            <Projects/> 
            <Awards/> 
            <Experience/>
            <Blog/>
        </>
    )
}
