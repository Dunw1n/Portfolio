import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Experience.scss";


export const Experience = () => {
    return (
        <div className="app-experience">
            <div className="container">

                <div className="app-experience-wrapper">
                    <TopBlock textContent={"My professional journey"}/>
                    <TitleSection textContent={"Experience & Education"}/>
                </div>

                <ul className="app-experience-list">
                    <li className="app-experience-item">
                        <h3 className="app-experience-item__title">Bachelor of Software Engineering</h3>
                        <h5 className="app-experience-item__subtitle">Ton Duc Thang University | 2022 - 2026</h5>
                        <p className="app-experience-item__descr">Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10.</p>
                    </li>
                    <li className="app-experience-item">
                        <h3 className="app-experience-item__title">Bachelor of Software Engineering</h3>
                        <h5 className="app-experience-item__subtitle">Ton Duc Thang University | 2022 - 2026</h5>
                        <p className="app-experience-item__descr">Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10.</p>
                    </li>
                    <li className="app-experience-item">
                        <h3 className="app-experience-item__title">Bachelor of Software Engineering</h3>
                        <h5 className="app-experience-item__subtitle">Ton Duc Thang University | 2022 - 2026</h5>
                        <p className="app-experience-item__descr">Building a strong foundation in computer science, algorithms, and web development principles, while maintaining a GPA of 7.8/10.</p>
                    </li>
                </ul>

            </div>
        </div>    
    )
}