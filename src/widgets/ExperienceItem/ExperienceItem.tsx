import "./ExperienceItem.scss";

interface IExperienceItem {
    title: string;
    subtitle: string;
    descr: string;
}

export const ExperienceItem = ({ title, subtitle, descr }: IExperienceItem) => {
    return (
        <li className="app-experience-item">
            <h3 className="app-experience-item__title">{title}</h3>
            <h5 className="app-experience-item__subtitle">{subtitle}</h5>
            <p className="app-experience-item__descr">{descr}</p>
        </li>
    )
}