import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../../widgets/ProjectCard/ProjectCard";
import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Projects.scss";

import PreviewProject from "../../assets/about-me-photo.jpg";



export const Projects = () => {
    return (
        <div className="app-projects">
            <div className="container">

                <div className="app-projects-wrapper section-wrapper">

                    <TopBlock textContent={"Some of my recent work"}/>
                    <TitleSection textContent={"Featured Projects"}/>

                    <div className="app-projects-list">
                        <ProjectCard 
                            previewProject={PreviewProject}
                            nameProject={"Omacha Shop"} 
                            direction={"Web, E-commerce, Full-stack"} 
                            stack={["PHP", "MySQL", "JavaScript", "Bootstrap"]} 
                            description={"A comprehensive toy e-commerce platform designed for a fun shopping experience and powerful admin tools."} 
                            linkGithub={"http://comprehensive.com"} 
                            linkHost={"http://comprehensive.com"}
                        />
                        <ProjectCard 
                            flexDirection="row-reverse"
                            previewProject={PreviewProject}
                            nameProject={"Omacha Shop"} 
                            direction={"Web, E-commerce, Full-stack"} 
                            stack={["Python", "Node", "JavaScript", "Bootstrap"]} 
                            description={"A comprehensive toy e-commerce platform designed for a fun shopping experience and powerful admin tools."} 
                            linkGithub={"#"} 
                            linkHost={"#"}
                        />
                        <ProjectCard 
                            previewProject={PreviewProject}
                            nameProject={"Omacha Shop"} 
                            direction={"Web, E-commerce, Full-stack"} 
                            stack={["PHP", "MySQL", "JavaScript", "Bootstrap"]} 
                            description={"A comprehensive toy e-commerce platform designed for a fun shopping experience and powerful admin tools."} 
                            linkGithub={"#"} 
                            linkHost={"#"}
                        />
                    </div>


                    <button className="app-projects-view">
                        <p>View All Projects</p>
                        <ArrowRight size={20}/>
                    </button>

                </div>

            </div>
        </div>
    )
}