import "./AboutItem.scss";

interface IAboutItem {
    label: string,
    content: string
}

export const AboutItem = ({ label, content }: IAboutItem) => {
    return (
        <li className="app-about-info__item">
            <h5>{label}</h5>
            <p>{content}</p>
        </li>
    )
}