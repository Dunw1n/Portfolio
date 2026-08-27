
import "./CardSkill.scss";


interface ICardSkill {
    valueWidth: number;
    nameCard: string;
    textWidth: string;
    urlIcon: string;
}

export const CardSkill = ({ valueWidth, nameCard, textWidth, urlIcon }: ICardSkill) => {
    return (
        <div className="app-skills-card">
            <div className="app-skills-card__content">
                <div className="app-skills-card__name">
                    <img src={urlIcon} alt="" />
                    <p>{nameCard}</p>
                </div>
                <p className="app-skills-card__count">{textWidth}%</p>
            </div>
            <div className="app-skills-card__line" >
                <span style={{ width: valueWidth + "%" }}></span>
            </div>
        </div>
    )
}