import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@widgets/ProjectCard/ProjectCard";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import "./Projects.scss";

import BuildMaster from "@assets/projects-section/image-projects/BuildMaster.jpg";
import LuxLocks from "@assets/projects-section/image-projects/LuxLocks.jpg";
import GustoElegante from "@assets/projects-section/image-projects/GustoElegante.jpg";



export const Projects = () => {
    return (
        <div className="app-projects">
            <div className="container">

                <div className="app-projects-wrapper section-wrapper">

                    <TopBlock textContent={"Мои недавние работы"}/>
                    <TitleSection textContent={"Список проектов"}/>

                    <div className="app-projects-list">
                        <ProjectCard 
                            previewProject={BuildMaster}
                            nameProject={"Build Master"} 
                            direction={"Front-end, Lending-page, Pet-проект"} 
                            stack={["CSS", "JavaScript", "Html", "Bootstrap"]} 
                            description={"Лендинг-сайт по продаже строительных материалов. Состоит из двух страниц главная и описание каждого товара"} 
                            linkGithub={"http://comprehensive.com"} 
                            linkHost={"http://comprehensive.com"}
                        />
                        <ProjectCard 
                            previewProject={LuxLocks}
                            nameProject={"Lux Locks"} 
                            direction={"Front-end, Multi-page, Pet-проект"} 
                            stack={["CSS", "JavaScript", "Html"]} 
                            description={"Информационный сайт по ухаживанию за волосами, состоящий из 4 страниц. Блог, Товары, Отзывы. Темная и светлая тема."} 
                            linkGithub={"#"} 
                            linkHost={"#"}
                        />
                        <ProjectCard 
                            previewProject={GustoElegante}
                            nameProject={"Guesto Elegante"} 
                            direction={"Front-end, Lending-page, Pet-проект"} 
                            stack={["PHP", "MySQL", "JavaScript", "Bootstrap"]} 
                            description={"Сайт ресторана, где представлены разные виды блюд, также присутствуют несколько страниц. Темная и светлая тема. Модальные окна"} 
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