import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@widgets/ProjectCard/ProjectCard";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import "./Projects.scss";

import PreviewProject from "@assets/about-me-photo.jpg";



export const Projects = () => {
    return (
        <div className="app-projects">
            <div className="container">

                <div className="app-projects-wrapper section-wrapper">

                    <TopBlock textContent={"Мои недавние работы"}/>
                    <TitleSection textContent={"Список проектов"}/>

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
                        <p>Смотреть все проекты</p>
                        <ArrowRight size={20}/>
                    </button>

                </div>

            </div>
        </div>
    )
}