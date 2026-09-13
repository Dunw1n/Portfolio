import { ExperienceItem } from "@widgets/ExperienceItem/ExperienceItem";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";
import "./Experience.scss";
import { useEffect, useState } from "react";


export const Experience = () => {
     const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://2970b491b97aa94b.mokky.dev/Experience');
            const data = await response.json();

            if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
            }

            setData(data);
        } catch (error) {
            console.error('Error fetching:', error.message);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="app-experience">
            <div className="container">

                <div className="app-experience-wrapper section-wrapper">
                    <TopBlock textContent={"Мой профессиональный путь"}/>
                    <TitleSection textContent={"Опыт и образование"}/>
                </div>

                <ul className="app-experience-list">
                    {data.map((item) => (
                        <ExperienceItem 
                            key={item.id}
                            title={item.title} 
                            subtitle={item.subtitle} 
                            descr={item.descr}
                        />
                    ))}
                </ul>

            </div>
        </div>    
    )
}