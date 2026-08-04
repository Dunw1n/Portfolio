import { CardSkill } from "../../widgets/CardSkill/CardSkill";
import { TitleSection } from "../../widgets/TitleSection/TitleSection";
import { TopBlock } from "../../widgets/TopBlock/TopBlock";
import "./Skills.scss";


export const Skills = () => {
    return (
        <div className="app-skills">
            <div className="container">
               <div className="app-skills-wrapper section-wrapper">

                    <TopBlock textContent={"My Skills"}/>
                    <TitleSection textContent={"Technical Stack"}/>

                    <div className="app-skills-list">
                        <CardSkill valueWidth={15} textWidth={"15"}/>
                        <CardSkill valueWidth={34} textWidth={"34"}/>
                        <CardSkill valueWidth={23} textWidth={"23"}/>
                        <CardSkill valueWidth={65} textWidth={"65"}/>
                        <CardSkill valueWidth={7} textWidth={"7"}/>
                        <CardSkill valueWidth={4} textWidth={"4"}/>
                        <CardSkill valueWidth={12} textWidth={"12"}/>
                        <CardSkill valueWidth={97} textWidth={"97"}/>
                        <CardSkill valueWidth={43} textWidth={"43"}/>
                        <CardSkill valueWidth={68} textWidth={"68"}/>
                    </div>

               </div>
            </div>
        </div>
    )
}