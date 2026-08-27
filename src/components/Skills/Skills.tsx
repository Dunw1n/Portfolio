import { CardSkill } from "../../widgets/CardSkill/CardSkill";
import { TitleSection } from "@widgets/TitleSection/TitleSection";
import { TopBlock } from "@widgets/TopBlock/TopBlock";

import JSIcon from "@assets/skills-section/JS-icon.svg";
import CSSIcon from "@assets/skills-section/Css-icon.svg";
import HtmlIcon from "@assets/skills-section/Html-icon.svg";
import TailwindIcon from "@assets/skills-section/TailwindIcon.svg";
import GithubIcon from "@assets/skills-section/Github-icon.svg";
import NodeIcon from "@assets/skills-section/NodeIcon.svg";
import ReactIcon from "@assets/skills-section/ReactIcon.svg";
import TypescriptIcon from "@assets/skills-section/TypescriptIcon.svg";
import PythonIcon from "@assets/skills-section/Python-icon.svg";
import PostgresIcon from "@assets/skills-section/PostgresIcon.svg";

import "./Skills.scss";


export const Skills = () => {
    return (
        <div className="app-skills">
            <div className="container">
               <div className="app-skills-wrapper section-wrapper">

                    <TopBlock textContent={"Мои навыки"}/>
                    <TitleSection textContent={"Технический стек"}/>

                    <div className="app-skills-list">
                        <CardSkill urlIcon={JSIcon} nameCard="JavaScript" valueWidth={15} textWidth={"15"}/>
                        <CardSkill urlIcon={CSSIcon} nameCard="CSS" valueWidth={34} textWidth={"34"}/>
                        <CardSkill urlIcon={HtmlIcon} nameCard="HTML5" valueWidth={23} textWidth={"23"}/>
                        <CardSkill urlIcon={TailwindIcon} nameCard="Tailwind" valueWidth={65} textWidth={"65"}/>
                        <CardSkill urlIcon={GithubIcon} nameCard="Github" valueWidth={7} textWidth={"7"}/>
                        <CardSkill urlIcon={NodeIcon} nameCard="Node" valueWidth={4} textWidth={"4"}/>
                        <CardSkill urlIcon={ReactIcon} nameCard="React" valueWidth={12} textWidth={"12"}/>
                        <CardSkill urlIcon={TypescriptIcon} nameCard="TypeScript" valueWidth={97} textWidth={"97"}/>
                        <CardSkill urlIcon={PythonIcon} nameCard="Python" valueWidth={43} textWidth={"43"}/>
                        <CardSkill urlIcon={PostgresIcon} nameCard="PostgresQL" valueWidth={68} textWidth={"68"}/>
                    </div>

               </div>
            </div>
        </div>
    )
}