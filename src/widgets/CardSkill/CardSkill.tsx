import JSIcon from "../../assets/skills-section/JS-icon.svg";
import "./CardSkill.scss";

export const CardSkill = () => {
    return (
        <div className="app-skills-card">
            <div className="app-skills-card__content">
                <div className="app-skills-card__name">
                    <img src={JSIcon} alt="" />
                    <p>JavaScript</p>
                </div>
                <p className="app-skills-card__count">85%</p>
            </div>
            <div className="app-skills-card__line">
                <span></span>
            </div>
        </div>
    )
}