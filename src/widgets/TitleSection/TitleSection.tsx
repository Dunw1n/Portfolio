import "./TitleSection.scss";


interface ITitleSection {
    textContent: string;
}

export const TitleSection = ({ textContent }: ITitleSection) => {
    return (
        <div className="app-secTitle">
            <h3 className="app-secTitle-text">{textContent}</h3>
            <span className="app-secTitle-divider"/>
        </div>
    )
}