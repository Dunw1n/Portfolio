import { ArrowRight } from "lucide-react";
import { ProjectCard } from "../../widgets/ProjectCard/ProjectCard";
import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Projects.scss";


export const Projects = () => {
    return (
        <div className="app-projects">
            <div className="container">

                <div className="app-projects-wrapper">

                    <TopBlock textContent={"Some of my recent work"}/>
                    <TitleSection textContent={"Featured Projects"}/>

                    <div className="app-projects-list">
                        <ProjectCard/>
                        <ProjectCard flexDirection="row-reverse"/>
                        <ProjectCard/>
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