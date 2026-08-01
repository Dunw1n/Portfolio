import { CardSkill } from "../../widgets/CardSkill/CardSkill";
import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Skills.scss";


export const Skills = () => {
    return (
        <div className="app-skills">
            <div className="container">
               <div className="app-skills-wrapper">
                    <TopBlock textContent={"My Skills"}/>

                    <TitleSection textContent={"Technical Stack"}/>

                    <div className="app-skills-list">
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                        <CardSkill/>
                    </div>
               </div>
            </div>
        </div>
    )
}