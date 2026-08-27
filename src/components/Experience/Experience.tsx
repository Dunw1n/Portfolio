import { ExperienceItem } from "@widgets/ExperienceItem/ExperienceItem";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import "./Experience.scss";


export const Experience = () => {
    return (
        <div className="app-experience">
            <div className="container">

                <div className="app-experience-wrapper section-wrapper">
                    <TopBlock textContent={"Мой профессиональный путь"}/>
                    <TitleSection textContent={"Опыт и образование"}/>
                </div>

                <ul className="app-experience-list">
                    <ExperienceItem 
                        title={"Прохождение образовательных курсов"} 
                        subtitle={"Udemy | Автор: Иван Петриченко | 2022 - 2023"} 
                        descr={"Многое время уделял прохождению курсов по созданию сайтов и в том числе SPA-приложений. Копил опыт и знания в этой сфере."}
                    />
                    <ExperienceItem 
                        title={"О фрилансе на платформе Kwork"} 
                        subtitle={"Фриланс | Подработка | Kwork | 2024"} 
                        descr={"Время от времени нарабатывал опыт, создавая реальные проекты. Помогал людям реализовать их задумку и требования."}
                    />
                    <ExperienceItem 
                        title={"Создание дизайна веб-приложений"} 
                        subtitle={"Декстопый и мобильный дизайн | Figma | 2025-2026"} 
                        descr={"Расширяю кругозор знаний не только в програмировании, но и в графическом дизайне, делая красивые макеты приложений."}
                    />
                </ul>

            </div>
        </div>    
    )
}