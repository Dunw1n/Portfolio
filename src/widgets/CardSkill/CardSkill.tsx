import JSIcon from "../../assets/skills-section/JS-icon.svg";
import "./CardSkill.scss";


interface ICardSkill {
    valueWidth: number;
    textWidth: string;
}

export const CardSkill = ({ valueWidth, textWidth }: ICardSkill) => {
    return (
        <div className="app-skills-card">
            <div className="app-skills-card__content">
                <div className="app-skills-card__name">
                    <img src={JSIcon} alt="" />
                    <p>JavaScript</p>
                </div>
                <p className="app-skills-card__count">{textWidth}%</p>
            </div>
            <div className="app-skills-card__line" >
                <span style={{ width: valueWidth + "%" }}></span>
            </div>
        </div>
    )
}