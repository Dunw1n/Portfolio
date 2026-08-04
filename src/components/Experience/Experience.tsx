import { ExperienceItem } from "../../widgets/ExperienceItem/ExperienceItem";
import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Experience.scss";


export const Experience = () => {
    return (
        <div className="app-experience">
            <div className="container">

                <div className="app-experience-wrapper section-wrapper">
                    <TopBlock textContent={"My professional journey"}/>
                    <TitleSection textContent={"Experience & Education"}/>
                </div>

                <ul className="app-experience-list">
                    <ExperienceItem 
                        title={"Bachelor of Software Engineering"} 
                        subtitle={"Ton Duc Thang University | 2022 - 2026"} 
                        descr={"Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10."}
                    />
                    <ExperienceItem 
                        title={"Bachelor of Software Engineering"} 
                        subtitle={"Ton Duc Thang University | 2022 - 2026"} 
                        descr={"Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10."}
                    />
                    <ExperienceItem 
                        title={"Bachelor of Software Engineering"} 
                        subtitle={"Ton Duc Thang University | 2022 - 2026"} 
                        descr={"Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10."}
                    />
                </ul>

            </div>
        </div>    
    )
}