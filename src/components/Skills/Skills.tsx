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
                        <CardSkill urlIcon={JSIcon} nameCard="JavaScript" valueWidth={85} textWidth={"85"}/>
                        <CardSkill urlIcon={CSSIcon} nameCard="CSS" valueWidth={70} textWidth={"70"}/>
                        <CardSkill urlIcon={HtmlIcon} nameCard="HTML5" valueWidth={80} textWidth={"80"}/>
                        <CardSkill urlIcon={TailwindIcon} nameCard="Tailwind" valueWidth={50} textWidth={"50"}/>
                        <CardSkill urlIcon={GithubIcon} nameCard="Github" valueWidth={75} textWidth={"75"}/>
                        <CardSkill urlIcon={NodeIcon} nameCard="Node" valueWidth={55} textWidth={"55"}/>
                        <CardSkill urlIcon={ReactIcon} nameCard="React" valueWidth={80} textWidth={"80"}/>
                        <CardSkill urlIcon={TypescriptIcon} nameCard="TypeScript" valueWidth={85} textWidth={"85"}/>
                        <CardSkill urlIcon={PythonIcon} nameCard="Python" valueWidth={25} textWidth={"25"}/>
                        <CardSkill urlIcon={PostgresIcon} nameCard="PostgresQL" valueWidth={50} textWidth={"50"}/>
                    </div>

               </div>
            </div>
        </div>
    )
}